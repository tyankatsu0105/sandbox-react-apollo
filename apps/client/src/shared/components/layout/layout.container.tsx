import React, { FunctionComponent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import PageHeadingQuery from '~client/graphql/states/page-heading/page-heading.graphql';

import { LayoutPresentational } from './layout.presentational';

type Props = {};

export const Layout: FunctionComponent<Props> = (props) => {
  const { data } = useQuery(PageHeadingQuery);

  const layoutPresentationalProps = {
    data,
  };
  return (
    <LayoutPresentational {...layoutPresentationalProps}>
      {props.children}
    </LayoutPresentational>
  );
};
