export default (
  initial,
  errorSelector,
  replaceSelector,
  properties,
  customHasErrors,
  createFormChangeValueType,
  RESET_FORM,
  SET_FORM_FIELDS,
  INVALIDATE_FORM,
  VALIDATE_FORM,
) => {
  const hasCustomErrorHandler = typeof customHasErrors === 'function';

  return (state = initial, {key, payload, type}) => {
    let CHANGE_VALUE;

    if (key) {CHANGE_VALUE = createFormChangeValueType(key);}

    let newState = state;

    switch (type) {
      case CHANGE_VALUE:
        const replaceValue = replaceSelector[key](payload);
        newState = {
          ...state,
          [key]: {
            ...state[key],
            value: replaceValue,
            errors: errorSelector[key](replaceValue),
          },
          validated: false,
        };
        break;
      case RESET_FORM:
        newState = {
          ...initial,
        };
        break;
      case SET_FORM_FIELDS:
        newState = properties.reduce((state, key) => {
          if (!payload[key]) {return state;}
          const replaceValue = replaceSelector[key](payload[key]);
          return {
            ...state,
            [key]: {
              ...state[key],
              value: replaceValue,
              errors: errorSelector[key](replaceValue),
            },
          };
        }, initial);
        break;
      case INVALIDATE_FORM:
        newState = {
          ...state,
          validated: false,
        };
        break;
      case VALIDATE_FORM:
        newState = properties.reduce(
          (state, key) => {
            const replaceValue = replaceSelector[key](state[key].value);
            return {
              ...state,
              [key]: {
                ...state[key],
                value: replaceValue,
                errors: errorSelector[key](replaceValue),
              },
            };
          },
          {...state, validated: true},
        );
        break;
    }

    return hasCustomErrorHandler
      ? {
        ...newState,
        hasErrors: customHasErrors(
          properties.reduce(
            (fields, property) => ({
              ...fields,
              [property]: {...newState[property]},
            }),
            {},
          ),
        ),
      }
      : {
        ...newState,
        hasErrors: properties.reduce(
          (_hasError, property) =>
            (newState[property].errors &&
              newState[property].errors.length > 0) ||
            _hasError,
          false,
        ),
      };
  };
};
