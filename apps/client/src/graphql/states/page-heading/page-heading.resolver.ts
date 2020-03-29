export const updatePageHeading = (
  _,
  { pageHeading },
  { cache, getCacheKey }
) => {
  const data = {
    pageHeading,
  };

  cache.writeData({ data });

  return pageHeading;
};
