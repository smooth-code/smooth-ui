module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-foreign-prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-shadow': 'off',
    'default-case': 'off',
    'no-underscore-dangle': ['off', { allow: ['__smoothUI', '__scTheme'] }],
  },
}
