import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { HomePresentational } from './home.presentational';

import { ViewerQuery } from './query/viewer.graphql';

type Props = {};

export const Home: FunctionComponent<Props> = (props) => {
  const { data } = useQuery(ViewerQuery);
  console.log(data);

  return <HomePresentational />;
};
