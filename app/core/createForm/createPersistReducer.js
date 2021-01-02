import {REDUX_PERSIST_HYDRATE} from './types';

export default (initial, formName) => (state = initial, action = {}) => {
  const isPersistAction = action.type === REDUX_PERSIST_HYDRATE;
  if (!isPersistAction || typeof action.payload === 'undefined') {
    return state;
  } 

    let persistedForm = {};
    if (action.payload.form) {
      persistedForm = action.payload.form[formName];
    } else if (action.payload.header.form) {
      persistedForm = action.payload.header.form[formName];
    }

    return {
      ...initial,
      ...persistedForm,
    };
  
}
