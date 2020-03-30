import { PageInput } from '~types/globalTypesGraphql';

export const updatePage = (_, { input }: { input: PageInput }, { cache }) => {
  const page = {
    ...input,
    __typename: 'Page',
  };

  const data = {
    page,
  };

  cache.writeData({ data });

  return page;
};
