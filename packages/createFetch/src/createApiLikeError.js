export default (errorMessage) => ({
  response: {
    statusText: errorMessage,
    data: {
      errors: [
        {
          errorCode: errorMessage,
          errorKey: errorMessage,
          errorMessage: errorMessage,
        },
      ],
    },
  },
});
