import React, { FunctionComponent } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { List, ListItem, Box, Typography } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) =>
  createStyles({
    'sidebar-header': {
      padding: theme.spacing[2],
    },
  })
);

type Props = {};

export const SidebarHeaderPresentational: FunctionComponent<Props> = (
  props
) => {
  const classes = useStyles({});
  return (
    <List className={classes['sidebar-header']}>
      <ListItem>
        <Box marginRight={1}>
          <BuildIcon color="primary" />
        </Box>
        <Typography variant="h6">Sandbox React Apollo</Typography>
      </ListItem>
    </List>
  );
};
