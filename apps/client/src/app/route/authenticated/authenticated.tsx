import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { Box } from '@material-ui/core';

import { MainPage } from '../../pages/main';
import { HomePage } from '../../pages/home';
import { Sidebar, Header } from '~client/shared/components';

const Authenticated = () => (
  <>
    <Box display="flex">
      <Sidebar />
      <Box>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/main" component={MainPage} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </Suspense>
        </main>
      </Box>
    </Box>
  </>
);

export default Authenticated;
