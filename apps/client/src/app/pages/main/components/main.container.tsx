import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import * as VersionQuery from './query/Version.graphql';
import * as GetCurrentCounterQuery from './query/GetCurrentCounter.graphql';
import * as IncreaseCurrentCounterMutation from './query/IncreaseCurrentCounter.graphql';

import { MainPresentational } from './main.presentational';

function createValue(type: string) {
  return { variables: { type } };
}

export const Main = () => {
  // const { data } = useQuery(VersionQuery);
  const { data } = useQuery(GetCurrentCounterQuery);
  const [increaseCurrentCounter] = useMutation(IncreaseCurrentCounterMutation, {variables: {type: '+'}});

  return <div>{data?.counter.current}
  <button type="button" onClick={() => increaseCurrentCounter()}>increase</button></div>;

  // return <MainPresentational />;
};
