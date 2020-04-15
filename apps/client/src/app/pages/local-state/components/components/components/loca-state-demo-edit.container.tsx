import React, { FunctionComponent } from 'react';

import { LocaStateDemoEditPresentational } from './loca-state-demo-edit.presentational';

import { useUpdateLocalStateDemoEditMutation } from '~client/graphql/__generated__/schema';

type Props = {};

export const LocaStateDemoEdit: FunctionComponent<Props> = (props) => {
  const [updateYou] = useUpdateLocalStateDemoEditMutation();

  const locaStateDemoEditPresentationalProps = {
    updateYou,
  };
  return (
    <LocaStateDemoEditPresentational
      {...locaStateDemoEditPresentationalProps}
    />
  );
};
