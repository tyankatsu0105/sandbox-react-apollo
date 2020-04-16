import React, { FunctionComponent } from 'react';

import { LocaStateDemoEditPresentational } from './loca-state-demo-edit.presentational';

import {
  useUpdateLocalStateDemoEditMutation,
  LocalStateDemoQuery,
} from '~client/graphql/__generated__/schema';

type Props = {
  data: LocalStateDemoQuery;
};

export const LocaStateDemoEdit: FunctionComponent<Props> = (props) => {
  const [updateYou] = useUpdateLocalStateDemoEditMutation();

  const locaStateDemoEditPresentationalProps = {
    ...props,
    updateYou,
  };
  return (
    <LocaStateDemoEditPresentational
      {...locaStateDemoEditPresentationalProps}
    />
  );
};
