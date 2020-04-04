import { Resolvers } from '~client/types/localStateGraphql';
import { updatePage } from './states/page';

export const resolvers: Resolvers = {
  Mutation: {
    updatePage,
  },
};
