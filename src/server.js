import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import _get from 'lodash.get';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'history';
import serialize from 'serialize-javascript';

import i18n from '@/i18n';

import i18nextMiddleware from 'i18next-express-middleware';

import App from '@/components/app';
import setupStore from '@/state/store';

import { ApolloProvider } from 'react-apollo';
import client from '@/api/apollo';

let assets;
if (process.env.RAZZLE_ASSETS_MANIFEST) {
  // eslint-disable-next-line
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
}
const publicDir = process.env.RAZZLE_PUBLIC_DIR || 'public';

const server = express();

if (process.env.NODE_ENV !== 'test') {
  // not using i18n middleware on test env
  server.use(i18nextMiddleware.handle(i18n));
}
server.disable('x-powered-by');
server.use(express.static(publicDir));
server.get('/*', async (req, res) => {
  // STORE
  const preloadedState = {};
  const history = createMemoryHistory();
  const store = setupStore(history, preloadedState);
  const context = {};
  const Root = () => (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </ApolloProvider>
  );

  const markup = renderToString(<Root />);

  // Grab the initial state from our Redux store
  const finalState = store.getState();
  const cssAssetUrl = _get(assets, 'client.css');
  const jsAssetUrl = _get(assets, 'client.js');

  if (context.url) {
    res.redirect(context.url);
  } else {
    const initialI18nStore = {};
    let initialLanguage;
    if (req.i18n) {
      req.i18n.languages.forEach((lang) => {
        initialI18nStore[lang] = req.i18n.services.resourceStore.data[lang];
      });
      initialLanguage = req.i18n.language;
    }

    res.status(200).send(
      `
<!doctype html>
<html lang="">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charset="utf-8" />
  <title>Join, and build amazing communities! Kommunity.app</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${cssAssetUrl ? `<link rel="stylesheet" type="text/css" href="${cssAssetUrl}">` : ''}
  ${process.env.NODE_ENV === 'production'
    ? `<script src="${jsAssetUrl}" defer></script>`
    : `<script src="${jsAssetUrl}" defer crossorigin></script>`}
  <script>
    window.i18n = {
      store: JSON.parse('${JSON.stringify(initialI18nStore)}'),
      lang: '${initialLanguage}'
    };
  </script>
</head>
<body class="font-sans font-normal text-dark">
  <div id="root">${markup}</div>
    <script>
      window.__PRELOADED_STATE__ = ${serialize(finalState)}
    </script>
</body>
</html>`,
    );
  }
});

export default server;
