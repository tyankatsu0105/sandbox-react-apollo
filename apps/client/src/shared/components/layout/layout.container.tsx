import React, { FunctionComponent } from 'react';

import { useLayoutQuery } from '~client/types/schema';

import { LayoutPresentational } from './layout.presentational';

type Props = {};

export const Layout: FunctionComponent<Props> = (props) => {
  const { data } = useLayoutQuery();

  const layoutPresentationalProps = {
    data,
  };
  return (
    <LayoutPresentational {...layoutPresentationalProps}>
      {props.children}
    </LayoutPresentational>
  );
};
