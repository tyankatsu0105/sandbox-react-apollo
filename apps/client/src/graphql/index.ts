import { ApolloClient, DefaultOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';

import { getCookies } from '@sandbox-react-apollo/helpers';
import { apiEndpoint } from '../environments/environment';

import { initialState } from './state';
import { resolvers } from './resolvers';

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

const httpLink = new HttpLink({
  uri: apiEndpoint,
});

const stateLink = withClientState({
  resolvers,
  defaults: initialState,
});

const link = ApolloLink.from([authLink, stateLink, httpLink]);

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  defaultOptions,
});
