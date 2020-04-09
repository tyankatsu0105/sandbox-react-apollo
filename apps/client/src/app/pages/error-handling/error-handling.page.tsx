import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useMutation } from '@apollo/react-hooks';
import { CreateErrorHandlingInfoMutation } from './mutation/create-error-handling-info.graphql';

import { ErrorHandling } from './components';

const ErrorHandlingPage = () => {
  const [createHomeInfo] = useMutation(CreateErrorHandlingInfoMutation, {
    variables: { input: { heading: 'Error Handling' } },
  });

  useEffect(() => {
    createHomeInfo();
  }, [createHomeInfo]);

  return (
    <>
      <Helmet>
        <title>Error Handling</title>
      </Helmet>
      <ErrorHandling />
    </>
  );
};

export default ErrorHandlingPage;
