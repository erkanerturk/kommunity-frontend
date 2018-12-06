/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable sort-keys */
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

export default new ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser,
  link: new HttpLink({
    // uri: 'https://api.graphcms.com/simple/v1/cjhdcwrb98if90109o4pzawaq',
    uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
    // uri: 'http://localhost:3000/gql',
    fetch,
  }),
  cache: process.browser
    ? new InMemoryCache().restore(window.__APOLLO_STATE__)
    : new InMemoryCache(),
});
