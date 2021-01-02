import {
  CHANGE_VALUE,
  INVALIDATE_FORM,
  RESET_FORM,
  SET_FORM_FIELDS,
  VALIDATE_FORM,
} from './types';

export const createChangeValueType = (formName, key) =>
  `${formName.toUpperCase()}_${key.toUpperCase()}_${CHANGE_VALUE}`;

export const createInvalidateFormType = (formName) =>
  `${formName.toUpperCase()}_${INVALIDATE_FORM}`;

export const createValidateFormType = (formName) =>
  `${formName.toUpperCase()}_${VALIDATE_FORM}`;

export const createResetFormType = (formName) =>
  `${formName.toUpperCase()}_${RESET_FORM}`;

export const createSetFormFieldsType = (formName) =>
  `${formName.toUpperCase()}_${SET_FORM_FIELDS}`;
