module.exports = {
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*@smooth-ui.*).*$'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
}
