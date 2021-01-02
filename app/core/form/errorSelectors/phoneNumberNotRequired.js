export default (input) => {
  if (
    !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(input) &&
    input !== ''
  )
    return 'Please enter a valid US phone number';
};
