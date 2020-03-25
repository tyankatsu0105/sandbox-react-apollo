import React from 'react';
import { Helmet } from 'react-helmet';

import { Home } from './components';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>TOP</title>
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
