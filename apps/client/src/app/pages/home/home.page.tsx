import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useMutation } from '@apollo/react-hooks';
import UpdatePageHeadingMutation from '~client/graphql/states/page-heading/update-page-heading.graphql';

import { Home } from './components';

const HomePage = () => {
  const [updatePageHeading] = useMutation(UpdatePageHeadingMutation, {
    variables: { input: { heading: 'このページ' } },
  });

  useEffect(() => {
    updatePageHeading();
  }, [updatePageHeading]);

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
