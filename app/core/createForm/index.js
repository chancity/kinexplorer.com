import {
  createChangeValueType,
  createInvalidateFormType,
  createResetFormType,
  createSetFormFieldsType,
  createValidateFormType,
} from './createTypes';

import {
  createBaseAction,
  createKeyChangeAction,
  createPayloadAction,
} from './createActions';

import createInitialState from './createInitialState';
import createErrorSelector from './createErrorSelector';
import createPersistReducer from './createPersistReducer';
import createReducer from './createReducer';
import createReplaceSelector from './createReplaceSelector';

export default ({
                  formName,
                  fields,
                  persist = true,
                  customHasErrors,
                  customReducer,
                }) => {
  const hasCustomReducer = typeof customReducer === 'function';

  const errorSelector = createErrorSelector(fields);
  const replaceSelector = createReplaceSelector(fields);
  const initialState = createInitialState(fields);
  const properties = fields.map(({key}) => key);

  const INVALIDATE_FORM = createInvalidateFormType(formName);
  const VALIDATE_FORM = createValidateFormType(formName);
  const RESET_FORM = createResetFormType(formName);
  const SET_FORM_FIELDS = createSetFormFieldsType(formName);

  const invalidateForm = createBaseAction(INVALIDATE_FORM, formName);
  const validateForm = createBaseAction(VALIDATE_FORM, formName);
  const resetForm = createBaseAction(RESET_FORM, formName);
  const setFormFields = createPayloadAction(SET_FORM_FIELDS, formName);
  const changeValue = createKeyChangeAction(formName);

  const createFormChangeValueType = (key) =>
    createChangeValueType(formName, key);

  const persistReducer = createPersistReducer(initialState, formName);

  const reducer = createReducer(
    initialState,
    errorSelector,
    replaceSelector,
    properties,
    customHasErrors,
    createFormChangeValueType,
    RESET_FORM,
    SET_FORM_FIELDS,
    INVALIDATE_FORM,
    VALIDATE_FORM,
  );

  const mergedReducer = (state = initialState, action) => {
    const newState = hasCustomReducer ? customReducer(state, action) : state;

    return persist
      ? reducer(persistReducer(newState, action), action)
      : reducer(newState, action);
  };

  return {
    reducer: mergedReducer,
    invalidateForm,
    validateForm,
    resetForm,
    setFormFields,
    changeValue,
    INVALIDATE_FORM,
    VALIDATE_FORM,
    RESET_FORM,
    SET_FORM_FIELDS,
  };
};
