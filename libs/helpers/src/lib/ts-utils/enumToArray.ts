export const enumToArray = <T>(argEnum: T) => {
  return {
    getKeys: () => Object.keys(argEnum),
    getValues: () => Object.values(argEnum),
  };
};
