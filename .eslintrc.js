module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-foreign-prop-types': 'off',

    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'default-case': 'off',
  },
}
