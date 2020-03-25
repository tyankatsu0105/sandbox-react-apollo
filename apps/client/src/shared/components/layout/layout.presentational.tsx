import React, { FunctionComponent } from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {};

export const LayoutPresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box marginTop={3}>
      <Box marginBottom={2}>
        <Typography variant="h3" component="h1">
          h1
        </Typography>
      </Box>
      {props.children}
    </Box>
  );
};
