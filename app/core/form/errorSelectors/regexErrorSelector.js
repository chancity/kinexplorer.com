const regexErrorSelector = (regex, message) => {
  const _regex = new RegExp(regex);

  return (input) => {
    if (!_regex.test(input))
      {return message;}
  };
};

export default regexErrorSelector;
