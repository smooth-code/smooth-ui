const config = {
  presets: [
    ['@babel/preset-env', { loose: true, modules: false }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}

if (process.env.NODE_ENV === 'lib') {
  module.exports = Object.assign({}, config, {
    plugins: [
      ...config.plugins,
      ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    ],
  })
} else if (process.env.NODE_ENV === 'rollup') {
  module.exports = Object.assign({}, config, {
    plugins: [...config.plugins, '@babel/plugin-external-helpers'],
  })
} else if (process.env.NODE_ENV === 'test') {
  module.exports = Object.assign({}, config, {
    plugins: [
      ...config.plugins,
      ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    ],
  })
} else {
  module.exports = config
}
