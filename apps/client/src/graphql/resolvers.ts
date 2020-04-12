import { Resolvers } from '~client/graphql/__generated__/localSchema';
import { updatePage } from './states/page';

export const resolvers: Resolvers = {
  Mutation: {
    updatePage,
  },
};
