import {PURGE} from './types';

const initial = {
  fetched: false,
  error: null,
  data: null,
  args: [],
  loading: false,
};

function fetchReducer(
  state = initial,
  action,
  {beginType, successType, errorType},
) {
  let fetchState = state;

  switch (action.type) {
    case PURGE:
      fetchState = {
        ...state,
        ...initial,
      };
      break;
    case beginType:
      fetchState = {
        ...state,
        data: null,
        error: null,
        loading: true,
        args: action.args || [],
      };
      break;
    case successType:
      fetchState = {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
        fetched: true,
        args: action.args || [],
      };
      break;
    case errorType:
      fetchState = {
        ...state,
        data: null,
        error: action.payload,
        loading: false,
        fetched: false,
        args: action.args || [],
      };
      break;
  }
  return fetchState;
}

export default (reducer, actionProperties) => {
  const isReducerFunction = typeof reducer === 'function';
  return function(state, action) {
    /**
     * if passed reducer is function invoke using current state
     * and action then invoke internal fetchReducer with current state
     * action and pass prefix to be used in switch case
     * */
    const _state = fetchReducer(state, action, actionProperties);
    return isReducerFunction ? reducer(_state, action) : _state;
  };
};

/**
 * End Internal use only
 * */
