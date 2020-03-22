import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useQueryString } from '@sandbox-react-apollo/hooks';

import { environment } from '../../../environments/environment';

import { Login } from './components';

type QueryString = 'code';

const LoginPage = () => {
  const { code } = useQueryString<QueryString>() || {};

  useEffect(() => {
    if (code) {
      const fetchToken = () => {
        const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('User-Agent', 'request');

        const body = new FormData();
        body.append('code', code);
        body.append('client_id', environment.githubOauthClientId);
        body.append('client_secret', environment.githubOauthClientSecret);

        fetch('https://github.com/login/oauth/access_token', {
          headers,
          body: JSON.stringify(body),
          method: 'POST',
          mode: 'no-cors'
        });
      };

      fetchToken();
    }
  }, [code]);

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
