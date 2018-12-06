import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

export default new ApolloClient({
  cache: process.browser
  // eslint-disable-next-line
    ? new InMemoryCache().restore(window.__APOLLO_STATE__)
    : new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  link: new HttpLink({
    fetch,
    uri: 'https://api.graph.cool/simple/v1/swapi',
    // uri: 'http://localhost:3000/gql',
  }),
  ssrMode: !process.browser,
});
