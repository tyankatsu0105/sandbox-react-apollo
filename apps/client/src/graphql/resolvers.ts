import { Resolvers } from '~client/types/localSchema';
import { updatePage } from './states/page';

export const resolvers: Resolvers = {
  Mutation: {
    updatePage,
  },
};
