import { ApolloClient, DefaultOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { resolvers } from './resolvers';
import { initialState } from './state';
import { typeDefs } from './typeDefs.graphql';
import { link } from './link';

const cache = new InMemoryCache();

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  cache,
  resolvers,
  link,
  defaultOptions,
  typeDefs,
});

cache.writeData({
  data: {
    ...initialState,
  },
});
