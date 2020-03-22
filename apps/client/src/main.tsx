import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as Sentry from '@sentry/browser';

import { client } from './graphql';
import { ApolloProvider } from '@apollo/react-hooks';

import { customTheme } from './styles/material-ui/customTheme';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { App } from './app/app';

import { sentry, production } from './environments/environment';

Sentry.init({
  dsn: sentry.dsn,
  environment: production ? 'production' : 'development',
  debug: production ? false : true
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
