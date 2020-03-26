import { IResolvers } from 'graphql-tools';

import { updatePageHeading } from './states/page-heading';

export const resolvers: IResolvers = {
  Mutation: {
    updatePageHeading,
  },
};
