export default (input) => {
  let newInput = input;
  newInput = newInput.replace(/\D+/g, '');

  if (newInput.startsWith('1') || newInput.startsWith('0'))
    {newInput = newInput.substr(1, newInput.length - 1);}

  if (newInput.startsWith('+1'))
    {newInput = newInput.substr(2, newInput.length - 1);}

  return newInput;
};
