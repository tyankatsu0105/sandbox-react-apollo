// @see https://github.com/iamhosseindhv/notistack
import * as React from 'react';
import { useState, useCallback } from 'react';
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
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

type Props = {
  key: OptionsObject['key'];
  message: string;
  details?: string;
};
export const Primary = React.forwardRef((props: Props, ref) => {
  const { closeSnackbar } = useOriginSnackbar();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const handleClose = (key: OptionsObject['key']) => {
    closeSnackbar(key);
  };

  return (
    <Card ref={ref}>
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
        <Box padding={1}>
          <Typography variant="body2">{props.details}</Typography>
        </Box>
      </Collapse>
    </Card>
  );
});
