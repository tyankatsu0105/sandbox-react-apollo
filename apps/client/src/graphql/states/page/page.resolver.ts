export const updatePage = (_, { page }, { cache }) => {
  const data = {
    page,
  };

  cache.writeData({ data });

  return page;
};
