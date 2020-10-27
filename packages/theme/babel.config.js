const path = require('path');

module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
        pure: true,
      },
    ],
    ['@babel/plugin-transform-react-jsx'],
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    /* ['@babel/plugin-transform-modules-commonjs'],*/
  ],
};
