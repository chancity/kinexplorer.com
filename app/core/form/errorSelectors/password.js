export default (input) => {
  if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])\S{8,20}$/.test(input))
    {return '8-20 characters and include at least 1 number and 1 capital letter.';}
};
