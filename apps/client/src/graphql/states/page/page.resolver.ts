import { MutationResolvers, Page } from '~client/types/localStateGraphql';

export const updatePage: MutationResolvers['updatePage'] = (
  _,
  { input },
  { cache }
) => {
  const page: Page = {
    ...input,
    __typename: 'Page',
  };

  const data = {
    page,
  };

  cache.writeData({ data });

  return page;
};
