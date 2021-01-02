export default (input) => {
  if (!/^[0-9]*$/.test(input))
    return 'This field accepts numeric value only. Please remove any alphabets, special characters, or punctuation.';
};
