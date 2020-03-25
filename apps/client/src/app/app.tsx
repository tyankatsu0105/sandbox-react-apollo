import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Helmet } from 'react-helmet';

import { LoginPage } from './pages/login';
import { Authentication } from './authentication';
import { Authenticated } from './route';

import { SITE_NAME } from '../shared';

export const App = () => (
  <>
    <Helmet titleTemplate={`%s | ${SITE_NAME}`} />

    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Authentication path="/" component={Authenticated} />
      </Switch>
    </Suspense>
  </>
);
