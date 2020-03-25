import React, { FunctionComponent } from 'react';

import { LayoutPresentational } from './layout.presentational';

type Props = {};

export const Layout: FunctionComponent<Props> = (props) => {
  return <LayoutPresentational>{props.children}</LayoutPresentational>;
};
