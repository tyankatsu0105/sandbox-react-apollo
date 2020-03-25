import React, { FunctionComponent } from 'react';

import { MenuList, MenuItem, Drawer, Divider, Box } from '@material-ui/core';

import { SidebarHeader, SidebarMenuItem } from './components';

type Props = {};

export const SidebarPresentational: FunctionComponent<Props> = (props) => (
  <Box width="280px">
    <Drawer open variant="permanent">
      <Box width="280px">
        <SidebarHeader />
        <Divider />
        <MenuList>
          <SidebarMenuItem to="/use-query">useQuery</SidebarMenuItem>
        </MenuList>
      </Box>
    </Drawer>
  </Box>
);
