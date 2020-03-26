export const updatePageHeading = (_, args, { cache }) => {
  const current = args.value;
  const data = {
    heading: {
      current,
      __typename: 'PageHeading',
    },
  };

  cache.writeData({ data });

  return current;
};
