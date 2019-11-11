module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'prettier',
  ],
  'rules': {
    'prettier/prettier': 'error',
  },
};