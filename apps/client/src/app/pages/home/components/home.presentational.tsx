import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';

import { ExternalLink } from '@sandbox-react-apollo/components';

type Props = {};

export const HomePresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box>
      <p>
        <ExternalLink href="https://www.apollographql.com/docs/react/">
          Apollo client
        </ExternalLink>
        の技術検証用に作ったものです。
      </p>
      <p>
        スタイルは
        <ExternalLink href="https://material-ui.com/">MATERIAL-UI</ExternalLink>
        を使ってます。
      </p>
    </Box>
  );
};
