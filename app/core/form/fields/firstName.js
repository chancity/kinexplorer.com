import requiredField from '../errorSelectors/requiredField';
import alphabetOnly from '../errorSelectors/alphabetOnly';

export default {
  key: 'firstName',
  label: 'First Name',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField,
    alphabetOnly,
  },
};
