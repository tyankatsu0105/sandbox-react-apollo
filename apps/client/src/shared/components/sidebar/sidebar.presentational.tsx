import React, { FunctionComponent } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { MenuList, MenuItem, Drawer, Divider } from '@material-ui/core';

import { SidebarHeader } from './components';

const useStyles = makeStyles((theme) =>
  createStyles({
    sidebar: {
      width: '280px',
    },
  })
);

type Props = {};

export const SidebarPresentational: FunctionComponent<Props> = (props) => {
  const classes = useStyles({});

  return (
    <div className={classes.sidebar}>
      <Drawer open variant="permanent">
        <div className={classes.sidebar}>
          <SidebarHeader />
          <Divider />
          <MenuList>
            <MenuItem>Menu1</MenuItem>
            <MenuItem>Menu2</MenuItem>
            <MenuItem>Menu3</MenuItem>
            <MenuItem>Menu4</MenuItem>
            <MenuItem>Menu5</MenuItem>
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
};
