import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useMutation } from '@apollo/react-hooks';
import CreateHomeInfoMutation from './mutation/create-home-info.graphql';

import { Home } from './components';

const HomePage = () => {
  const [createHomeInfo] = useMutation(CreateHomeInfoMutation, {
    variables: { input: { heading: 'このサイトについて' } },
  });

  useEffect(() => {
    createHomeInfo();
  }, [createHomeInfo]);

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
