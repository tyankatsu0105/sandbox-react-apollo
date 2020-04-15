import React, { FunctionComponent } from 'react';

import { useLocalStateDemoQuery } from '~client/graphql/__generated__/Schema';

import { LocaStateDemoPresentational } from './loca-state-demo.presentational';

type Props = {};

export const LocaStateDemo: FunctionComponent<Props> = (props) => {
  const { data } = useLocalStateDemoQuery();

  const locaStateDemoPresentationalProps = {
    data,
  };

  return <LocaStateDemoPresentational {...locaStateDemoPresentationalProps} />;
};
