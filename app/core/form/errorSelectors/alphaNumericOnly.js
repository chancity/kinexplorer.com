export default (input) => {
  if (!/^[a-zA-Z0-9_ ]*$/.test(input))
    return 'This field  accepts alphanumeric text only. Please remove any special characters or punctuation.';
};
