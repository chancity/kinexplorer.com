function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}

export default ({dispatch}) => {
  return (next) => (action) => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
};
