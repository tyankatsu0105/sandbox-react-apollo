// @see https://github.com/iamhosseindhv/notistack
import * as React from 'react';
import { useState, useRef, useCallback, useEffect, Component } from 'react';
import {
  useSnackbar as useOriginSnackbar,
  VariantType,
  OptionsObject,
  SnackbarContent,
} from 'notistack';

import {
  Card,
  CardActions,
  IconButton,
  Typography,
  Box,
  Collapse,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Primary } from './components';

type Props = {
  snackbarType: 'primary';
};
type ShowSnackBarProps = {
  message: string;
  details?: string;
};

export const useSnackbar = (props: Props = { snackbarType: 'primary' }) => {
  const { enqueueSnackbar } = useOriginSnackbar();

  const snackbars = {
    primary: Primary,
  };
  const Snackbar = snackbars[props.snackbarType];

  const showSnackBar = (showSnackBarProps: ShowSnackBarProps) => {
    const content: SnackbarContent = (key) => (
      <Snackbar key={key} {...showSnackBarProps} />
    );

    return enqueueSnackbar(null, { content, persist: true });
  };

  return {
    showSnackBar,
  };
};
