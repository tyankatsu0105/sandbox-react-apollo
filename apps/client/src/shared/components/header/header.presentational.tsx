import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';

import { HeaderUser } from './components';

type Props = {};

export const HeaderPresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box
      minHeight="64px"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
    >
      <HeaderUser />
    </Box>
  );
};
