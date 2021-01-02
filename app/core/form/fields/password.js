import requiredFieldErrorSelector from '../errorSelectors/requiredField';
export default {
  key: 'password',
  label: 'Password',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField: requiredFieldErrorSelector,
  },
};
