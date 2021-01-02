import requiredField from '../errorSelectors/requiredField';
import alphabetOnly from '../errorSelectors/alphabetOnly';

export default {
  key: 'lastName',
  label: 'Last Name',
  initialValue: '',
  initialError: [],
  errorSelector: {
    requiredField: requiredField,
    alphabetOnly: alphabetOnly,
  },
};
