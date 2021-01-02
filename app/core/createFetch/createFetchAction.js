import {FETCH_BEGIN, FETCH_ERROR, FETCH_SUCCESS} from './types';

const camelToSnake = (str) => {
  return str
  .replace(/[\w]([A-Z])/g, function(m) {
    return `${m[0]  }_${  m[1]}`;
  })
  .toUpperCase();
};

/**
 * Capture arbitrary async method to call with dispatch
 * */
export default (action, key) => {
  /**
   *  generate action creators with passed prefix
   */
  const keyToSnakeCase = camelToSnake(key);
  const fetchBeginType = `${keyToSnakeCase}_${FETCH_BEGIN}`;
  const fetchSuccessType = `${keyToSnakeCase}_${FETCH_SUCCESS}`;
  const fetchErrorType = `${keyToSnakeCase}_${FETCH_ERROR}`;

  const fetchBegin = (args) => ({
    type: fetchBeginType,
    args,
  });

  const fetchSuccess = (payload, args) => ({
    type: fetchSuccessType,
    payload,
    args,
  });

  const fetchError = (payload, args) => ({
    type: fetchErrorType,
    payload,
    args,
  });

  /**
   * Wrap dispatch function with function to pass arbitrary
   * arguments to asyncMethod if needed
   * */
  const _action = (...args) => {
    return (dispatch, getState) =>
      new Promise( (resolve, reject) => {
        const formattedArgs = args.reduce(
          (formattedArgs, currentArg, index) => {
            return {
              ...formattedArgs,
              [`arg${index}`]: currentArg,
            };
          },
          {},
        );

        dispatch(fetchBegin(formattedArgs));
        const thunk = action.apply(this, args);

        thunk(dispatch, getState)
        .then((response) => {
          dispatch(fetchSuccess(response, formattedArgs));
          resolve(response);
        })
        .catch((error) => {
          dispatch(fetchError(error, formattedArgs));
          reject(error);
        });
      });
  };

  return {
    action: _action,
    beginAction: fetchBegin,
    successAction: fetchSuccess,
    errorAction: fetchError,
    beginType: fetchBeginType,
    successType: fetchSuccessType,
    errorType: fetchErrorType,
  };
};
