import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { ErrorHandling } from './components';

import { useCreateErrorHandlingInfoMutation } from '~client/types/schema';

const ErrorHandlingPage = () => {
  const [createHomeInfo] = useCreateErrorHandlingInfoMutation({
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
