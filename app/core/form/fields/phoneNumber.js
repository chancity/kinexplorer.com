import requiredField from '../errorSelectors/requiredField';
import phoneNumberOnly from '../errorSelectors/phoneNumberOnly';
import cleanPhoneNumber from '../replaceSelectors/cleanPhoneNumber';
import formatPhoneNumber from '../replaceSelectors/formatPhoneNumber';

export default {
  key: 'phoneNumber',
  label: 'Phone Number',
  initialValue: '',
  initialError: [],
  replaceSelector: {
    cleanPhoneNumber: cleanPhoneNumber,
    formatPhoneNumber: formatPhoneNumber,
  },
  errorSelector: {
    requiredField: requiredField,
    phoneNumberOnly: phoneNumberOnly,
  },
};
