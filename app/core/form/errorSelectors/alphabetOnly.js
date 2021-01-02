export default (input) => {
  if (!/^[a-zA-Z ]*$/.test(input))
    return 'This field  accepts alphabet text only. Please remove any numbers, special characters or punctuation.';
};
