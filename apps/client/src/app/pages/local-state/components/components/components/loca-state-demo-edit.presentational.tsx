import React, { FunctionComponent } from 'react';

import { UpdateLocalStateDemoEditMutationFn } from '~client/graphql/__generated__/schema';

type Props = {
  updateYou: UpdateLocalStateDemoEditMutationFn;
};

export const LocaStateDemoEditPresentational: FunctionComponent<Props> = (
  props
) => {
  return <div></div>;
};
