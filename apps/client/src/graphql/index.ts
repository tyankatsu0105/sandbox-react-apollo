import { ApolloClient, DefaultOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import { getCookies } from '@sandbox-react-apollo/helpers';
import { environment } from '../environments/environment';

import { resolvers } from './resolvers';
import { initialState } from './state';
import { typeDefs } from './typeDefs.graphql';

import { Cookies } from '~client/shared/types';

const { githubAccessToken } = getCookies<Cookies>();
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${githubAccessToken}`,
    },
  };
});

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: environment.apiEndpoint,
});

const link = ApolloLink.from([authLink, httpLink]);

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
