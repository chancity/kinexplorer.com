import requiredFieldErrorSelector from '../errorSelectors/requiredField';
import emailOnly from '../errorSelectors/emailOnly';

export default {
  key: 'email',
  label: 'Email',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField: requiredFieldErrorSelector,
    emailOnly: emailOnly,
  },
};
