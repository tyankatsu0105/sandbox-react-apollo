import { Resolvers } from 'apollo-client';

import { updatePage } from './states/page';

export const resolvers: Resolvers = {
  Mutation: {
    updatePage,
  },
};
