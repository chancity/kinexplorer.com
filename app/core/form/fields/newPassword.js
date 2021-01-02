import requiredFieldErrorSelector from '../errorSelectors/requiredField';
import passwordErrorSelector from '../errorSelectors/password';

export default {
  key: 'password',
  label: 'Password',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField: requiredFieldErrorSelector,
    password: passwordErrorSelector,
  },
};
