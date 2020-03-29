export const updatePageHeading = (_, { value }, { cache }) => {
  const current = value;
  const data = {
    heading: {
      current,
      __typename: 'PageHeading',
    },
  };

  cache.writeData({ data });

  return current;
};
