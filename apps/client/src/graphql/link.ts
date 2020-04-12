import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

import { getCookies } from '@sandbox-react-apollo/helpers';
import { environment } from '../environments/environment';

import { Cookies } from '~client/shared/types';

import * as Sentry from '@sentry/browser';
import { Severity } from '@sentry/browser';

const { githubAccessToken } = getCookies<Cookies>();
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${githubAccessToken}`,
    },
  };
});

// @see https://www.apollographql.com/docs/link/links/error/#callback
const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
  console.log(graphQLErrors);
  console.log(networkError);

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations }) => {
      Sentry.withScope((scope) => {
        scope.setTag('kind', 'graphQLError');
        scope.setLevel(Severity.Error);

        scope.setExtra('operationName', operation.operationName);
        scope.setExtra('variables', operation.variables);
        scope.setExtra('message', message);
        scope.setExtra('locations', locations);

        Sentry.captureMessage(message);
      });
    });
  }

  if (networkError) {
    Sentry.withScope((scope) => {
      scope.setTag('kind', 'networkError');
      scope.setLevel(Severity.Error);

      scope.setExtra('name', networkError.name);
      scope.setExtra('message', networkError.message);
      scope.setExtra('stack', networkError.stack);

      Sentry.captureMessage(networkError.message);
    });
  }
});

const httpLink = new HttpLink({
  uri: environment.apiEndpoint,
});

export const link = ApolloLink.from([authLink, httpLink, errorLink]);
