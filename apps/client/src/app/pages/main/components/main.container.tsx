import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import VersionQuery from './query/Version.graphql';

import { MainPresentational } from './main.presentational';

export const Main = () => {
  const { data } = useQuery(VersionQuery);
  console.log(data);

  return <MainPresentational />;
};
