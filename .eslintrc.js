/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  globals: {
    testStylelintRule: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react-hooks'],
  rules: {
    'class-methods-use-this': OFF, // It's a way of allowing private variables.
    'func-names': OFF,
    // Ignore certain webpack alias because it can't be resolved
    'import/no-unresolved': [ERROR, {ignore: ['^@theme', '^@generated']}],
    'import/extensions': OFF,
    'jsx-a11y/click-events-have-key-events': WARNING,
    'jsx-a11y/no-noninteractive-element-interactions': WARNING,
    'no-console': OFF,
    'no-underscore-dangle': OFF,
    curly: [WARNING, 'all'],
    'react/jsx-closing-bracket-location': OFF, // Conflicts with Prettier.
    'react/jsx-filename-extension': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/no-array-index-key': OFF, // Sometimes its ok, e.g. non-changing data.
    'react/prop-types': OFF,
    'react/destructuring-assignment': OFF, // Too many lines.
    'react/prefer-stateless-function': WARNING,
    'react/jsx-props-no-spreading': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'import/first': OFF,
    'import/order': OFF,
    'lines-between-class-members': OFF,
    'no-use-before-define': [
      ERROR,
      {functions: false, classes: false, variables: true},
    ],
    'no-unused-vars': OFF,
    'import/prefer-default-export': WARNING,
    'import/no-extraneous-dependencies': WARNING,
    'no-useless-escape': WARNING,
    'prefer-template': WARNING,
    'no-shadow': WARNING,
    'no-param-reassign': WARNING,
    'no-else-return': WARNING,
    'no-template-curly-in-string': WARNING,
    'array-callback-return': WARNING,
    camelcase: WARNING,
    'no-nested-ternary': WARNING,
    'object-shorthand': WARNING,
    'no-restricted-syntax': WARNING,
    'no-unused-expressions': WARNING,
    'consistent-return': WARNING,
    'no-useless-return': WARNING,
    'global-require': WARNING,
    'prefer-destructuring': WARNING,
    yoda: WARNING,
    'no-control-regex': WARNING,
    'no-empty': WARNING,
    'no-prototype-builtins': WARNING,
    'no-case-declarations': WARNING,
    'default-case': WARNING,
    'dot-notation': WARNING,
  },
};
