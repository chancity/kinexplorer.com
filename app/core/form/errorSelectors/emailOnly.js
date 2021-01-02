const validEmailRegex = RegExp(
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
);

export default (input) => {
  if (!validEmailRegex.test(input))
    {return 'Please enter a valid email address using the format: email@domain.com';}
};
