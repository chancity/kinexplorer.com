export default (fields) =>
  fields.reduce(
    (state, {key, label, initialValue, initialError}) => ({
      ...state,
      [key]: {
        key,
        label,
        value: initialValue,
        errors: initialError,
      },
    }),
    {hasErrors: false, validated: false},
  );
