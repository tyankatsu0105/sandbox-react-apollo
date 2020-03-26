import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { Box } from '@material-ui/core';

import { HomePage } from '../../pages/home';
import { Sidebar, Header, Layout } from '~client/shared/components';

const Authenticated = () => (
  <>
    <Box display="flex">
      <Sidebar />
      <Box flexGrow="1" paddingLeft={3} paddingRight={3}>
        <Header />
        <Box component="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Switch>
                <Route exact path="/" component={HomePage} />
              </Switch>
            </Layout>
          </Suspense>
        </Box>
      </Box>
    </Box>
  </>
);

export default Authenticated;
