import React, { FunctionComponent } from 'react';
import { Box, Typography } from '@material-ui/core';

import { Layout as LayoutTypes } from './query/__generated__/Layout';

type Props = {
  data: LayoutTypes;
};

export const LayoutPresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box marginTop={3}>
      <Box marginBottom={5}>
        <Typography variant="h3" component="h1">
          {props.data?.page?.heading}
        </Typography>
      </Box>
      {props.children}
    </Box>
  );
};
