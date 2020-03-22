import { ApolloClient, DefaultOptions } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

import { getCookies } from '@sandbox-react-apollo/helpers';
import { apiEndpoint } from '../environments/environment';

type Cookies = 'githubAccessToken';
const { githubAccessToken } = getCookies<Cookies>();

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${githubAccessToken}`
    }
  };
});

const httpLink = new HttpLink({
  uri: apiEndpoint
});

const link = ApolloLink.from([authLink, httpLink]);

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all'
  },
  mutate: {
    errorPolicy: 'all'
  }
};

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  defaultOptions
});
