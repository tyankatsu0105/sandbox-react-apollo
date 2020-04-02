import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LayoutQuery } from './query/layout.graphql';

import { LayoutPresentational } from './layout.presentational';

type Props = {};

export const Layout: FunctionComponent<Props> = (props) => {
  const { data } = useQuery(LayoutQuery);

  const layoutPresentationalProps = {
    data,
  };
  return (
    <LayoutPresentational {...layoutPresentationalProps}>
      {props.children}
    </LayoutPresentational>
  );
};
