import { ApolloClient, InMemoryCache, DefaultOptions } from '@apollo/client';

import { resolvers } from './resolvers';
import typeDefs from './typeDefs.graphql';
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
  link,
  defaultOptions,
  typeDefs,
  resolvers,
});
