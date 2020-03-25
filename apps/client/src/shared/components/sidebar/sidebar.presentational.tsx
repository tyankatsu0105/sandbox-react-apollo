import React, { FunctionComponent } from 'react';

import { MenuList, MenuItem, Drawer, Divider, Box } from '@material-ui/core';

import { SidebarHeader } from './components';

type Props = {};

export const SidebarPresentational: FunctionComponent<Props> = (props) => (
  <Box width="280px">
    <Drawer open variant="permanent">
      <Box width="280px">
        <SidebarHeader />
        <Divider />
        <MenuList>
          <MenuItem>Menu1</MenuItem>
          <MenuItem>Menu2</MenuItem>
          <MenuItem>Menu3</MenuItem>
          <MenuItem>Menu4</MenuItem>
          <MenuItem>Menu5</MenuItem>
        </MenuList>
      </Box>
    </Drawer>
  </Box>
);
