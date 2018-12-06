/* global window, document */
import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import App from '@/components/app';
import setupStore from '@/state/store';

import { ApolloProvider } from 'react-apollo';
import client from '@/api/apollo';

const history = createBrowserHistory();
// eslint-disable-next-line no-underscore-dangle
const store = setupStore(history, window.__PRELOADED_STATE__);

hydrate(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    hydrate(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </ApolloProvider>,
      document.getElementById('root'),
    );
  });
}
