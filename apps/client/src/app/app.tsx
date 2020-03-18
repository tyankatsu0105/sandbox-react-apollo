import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { MainPage } from './pages/main';

export const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </Suspense>
);
