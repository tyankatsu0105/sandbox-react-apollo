import React, { FunctionComponent } from 'react';
import { Box, Link } from '@material-ui/core';

type Props = {};

export const HomePresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box>
      <p>
        <Link href="https://www.apollographql.com/docs/react/">
          Apollo client
        </Link>
        の技術検証用に作ったものです。
      </p>
      <p>
        スタイルは <Link href="https://material-ui.com/">MATERIAL-UI</Link>
        を使ってます。
      </p>
    </Box>
  );
};
