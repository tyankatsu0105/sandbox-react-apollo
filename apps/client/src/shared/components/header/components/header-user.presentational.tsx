import React, { FunctionComponent } from 'react';

import { IconButton, MenuItem, Menu } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

type Props = {
  open: boolean;
  handleToggleAnchorEl: (anchorEl: HTMLElement) => void;
  anchorEl: HTMLElement;
  handleLogOut: () => void;
};

export const HeaderUserPresentational: FunctionComponent<Props> = (props) => (
  <>
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={(event) => props.handleToggleAnchorEl(event.currentTarget)}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.open}
      onClose={() => props.handleToggleAnchorEl(null)}
    >
      <li>
        <MenuItem component="button" type="submit" onClick={props.handleLogOut}>
          ログアウト
        </MenuItem>
      </li>
    </Menu>
  </>
);
