export default (input) => {
  const zip = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    return `(${zip}) ${middle}-${last}`;
  } if (input.length > 3) {
    return `(${zip}) ${middle}`;
  } if (input.length > 0) {
    return `(${zip}`;
  }

  return input;
};
