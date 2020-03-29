import React, { FunctionComponent } from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {
  data: {
    pageHeading: string;
  };
};

export const LayoutPresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box marginTop={3}>
      <Box marginBottom={5}>
        <Typography variant="h3" component="h1">
          {props.data?.pageHeading}
        </Typography>
      </Box>
      {props.children}
    </Box>
  );
};
