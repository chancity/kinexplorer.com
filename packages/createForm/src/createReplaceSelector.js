const combineReplaceSelectors = (selectors) => {
  const keys = Object.keys(selectors);
  return (input) => {
    return keys.reduce((newInput, selectorKey) => {
      return selectors[selectorKey](newInput);
    }, input);
  };
};

export default (fields) =>
  fields.reduce(
    (state, {key, replaceSelector = {}}) => ({
      ...state,
      [key]: combineReplaceSelectors(replaceSelector),
    }),
    {},
  );
