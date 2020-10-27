import {createChangeValueType} from './createTypes';

export const createKeyChangeAction = (formName) => (key, payload) => ({
  type: createChangeValueType(formName, key),
  formName,
  payload,
  key,
});

export const createPayloadAction = (type, formName) => (payload) => ({
  type,
  formName,
  payload,
});

export const createBaseAction = (type, formName) => () => ({
  type,
  formName,
});
