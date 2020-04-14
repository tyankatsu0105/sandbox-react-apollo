import React, { FunctionComponent } from 'react';
import { Box } from '@material-ui/core';

import { ExternalLink } from '@sandbox-react-apollo/components';

type Props = {};

export const LocalStatePresentational: FunctionComponent<Props> = (props) => {
  return (
    <Box>
      <p>このサイトのh1はlocal state使っている</p>

      <h2>typeDefsでschema作る</h2>

      <p>
        local
        stateは自分でschema作って、cacheに値を書き込むか、query,mutationを介して値の更新取得を行う
      </p>
    </Box>
  );
};
