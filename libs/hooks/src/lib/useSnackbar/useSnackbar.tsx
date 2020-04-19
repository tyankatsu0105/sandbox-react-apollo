// @see https://github.com/iamhosseindhv/notistack
import * as React from 'react';
import { useState, useRef, useCallback, useEffect, Component } from 'react';
import {
  useSnackbar as useOriginSnackbar,
  SnackbarContent,
  VariantType,
} from 'notistack';

import { Details } from './components';

type ShowDetailsSnackBarProps = {
  message: string;
  details: string;
  variant: VariantType;
};

export const useSnackbar = () => {
  const { enqueueSnackbar } = useOriginSnackbar();

  const showDetailsSnackbar = (
    showDetailsSnackBarProps: ShowDetailsSnackBarProps
  ) => {
    const content: SnackbarContent = (key) => (
      <Details key={key} {...showDetailsSnackBarProps} />
    );

    return enqueueSnackbar(null, {
      content,
      persist: true,
    });
  };

  return {
    showDetailsSnackbar,
  };
};
