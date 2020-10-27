const nextLog = (getState, next, action) => {
  const start = new Date();
  console.groupCollapsed(action.type);

  console.log('%c action', 'color: yellow; font-weight: bold;', action);

  const returnValue = next(action);

  const end = new Date();
  const duration = end - start;

  console.log(
    `%c new state %c [${duration}ms]`,
    'color: green; font-weight: bold;',
    'color: red; font-weight: bold;',
    {...getState()},
  );

  console.groupEnd();

  return returnValue;
};

export default ({getState}) => {
  return (next) => (action) => {
    return process.browser && typeof action.type === 'string'
      ? nextLog(getState, next, action)
      : next(action);
  };
};
