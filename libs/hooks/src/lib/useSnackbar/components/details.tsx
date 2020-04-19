// @see https://github.com/iamhosseindhv/notistack
import * as React from 'react';
import { useState, useCallback } from 'react';
import { useSnackbar, OptionsObject, VariantType } from 'notistack';

import { makeStyles } from '@material-ui/core/styles';

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
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { nl2br } from '@sandbox-react-apollo/helpers';

type Props = {
  key: OptionsObject['key'];
  message: string;
  details: string;
  variant: VariantType;
};
export const Details = React.forwardRef((props: Props, ref) => {
  const useStyles = makeStyles((theme) => ({
    'details-default': {
      backgroundColor: theme.palette.grey[600],
    },
    'details-success': {
      backgroundColor: theme.palette.success.main,
    },
    'details-error': {
      backgroundColor: theme.palette.error.main,
    },
    'details-warning': {
      backgroundColor: theme.palette.warning.main,
    },
    'details-info': {
      backgroundColor: theme.palette.info.main,
    },
    'details-Panel': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  }));

  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const handleClose = (key: OptionsObject['key']) => {
    closeSnackbar(key);
  };

  return (
    <Card ref={ref} className={classes[`details-${props.variant}`]}>
      <CardActions>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">{props.message}</Typography>

          <Box paddingLeft={3}>
            <IconButton onClick={handleExpand}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton onClick={() => handleClose(props.key)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box padding={1} className={classes['details-Panel']}>
          <Typography variant="body2">{nl2br(props.details)}</Typography>
        </Box>
      </Collapse>
    </Card>
  );
});
