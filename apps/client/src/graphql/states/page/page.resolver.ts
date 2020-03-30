export const updatePage = (_, { input }, { cache }) => {
  const data = {
    page: {
      ...input,
      __typename: 'Page',
    },
  };

  cache.writeData({ data });

  return null;
};
