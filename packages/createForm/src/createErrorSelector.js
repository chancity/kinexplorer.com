const combineErrorSelectors = (selectors) => {
  const keys = Object.keys(selectors);

  return (input) => {
    return keys.reduce((errors, selectorKey) => {
      const newPossibleError = selectors[selectorKey](input);

      if (
        newPossibleError &&
        newPossibleError !== '' &&
        typeof newPossibleError === 'string'
      ) {
        return [...errors, newPossibleError];
      }

      return errors;
    }, []);
  };
};

export default (fields) =>
  fields.reduce(
    (state, {key, errorSelector = {}}) => ({
      ...state,
      [key]: combineErrorSelectors(errorSelector),
    }),
    {},
  );
