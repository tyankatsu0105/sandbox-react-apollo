import React from 'react';
import { Helmet } from 'react-helmet';

import { Login } from './components';

type QueryString = 'code';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>login</title>
      </Helmet>

      <Login />
    </>
  );
};

export default LoginPage;
