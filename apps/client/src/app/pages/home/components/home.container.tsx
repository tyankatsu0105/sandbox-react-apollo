import React, { FunctionComponent, useEffect } from 'react';

import { HomePresentational } from './home.presentational';

import Viewer from './query/viewer.graphql';

type Props = {};

export const Home: FunctionComponent<Props> = (props) => {
  return <HomePresentational />;
};
