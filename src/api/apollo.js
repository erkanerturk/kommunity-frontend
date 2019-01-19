/* global window */
import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { getMainDefinition } from 'apollo-utilities';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';

import { isServer } from '../utils';

// Create an http link:
const httpLink = new HttpLink({
  fetch,
  // TODO make it work for windows
  // uri: 'http://192.168.99.100:4000/gql',
  // uri: 'https://staging-api.kommunity.app/gql',
  uri: 'http://localhost:3008/gql',
});

// Create a WebSocket link:
let wsLink;
if (process.env.BUILD_TARGET === 'client') {
  wsLink = new WebSocketLink({
    options: {
      reconnect: true,
    },
    // TODO make it work for windows
    // uri: 'ws://192.168.99.100:3008/graphql-subscriptions',
    // uri: 'wss://staging-api.kommunity.app/graphql-subscriptions',
    uri: 'ws://localhost:3008/graphql-subscriptions',
  });
}

// split based on operation type
const link =
  process.env.BUILD_TARGET === 'client'
    ? split(
        ({ query }) => {
          const { kind, operation } = getMainDefinition(query);
          return kind === 'OperationDefinition' && operation === 'subscription';
        },
        wsLink,
        httpLink,
      )
    : httpLink;

export default new ApolloClient({
  cache: !isServer()
    ? // eslint-disable-next-line no-underscore-dangle
      new InMemoryCache().restore(window.__APOLLO_STATE__)
    : new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  link,
  ssrMode: isServer(),
});
