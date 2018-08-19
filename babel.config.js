const { STYLED_ENGINE = 'styled-components' } = process.env

const getStyledEnginePlugins = () => {
  switch (STYLED_ENGINE) {
    case 'emotion':
      return ['babel-plugin-emotion']
    case 'styled-components':
      return []
    default:
      return []
  }
}

const config = {
  presets: [
    ['@babel/preset-env', { loose: true, modules: false }],
    '@babel/preset-react',
  ],
  plugins: [
    ...getStyledEnginePlugins(),
    [
      'babel-plugin-transform-rename-import',
      {
        replacements: [
          {
            original: '(.*)styled-engine$',
            replacement: `$1styled-engine/${STYLED_ENGINE}`,
          },
        ],
      },
    ],
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}

if (process.env.BABEL_ENV === 'lib') {
  module.exports = Object.assign({}, config, {
    plugins: [
      ...config.plugins,
      ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    ],
  })
} else if (process.env.BABEL_ENV === 'rollup') {
  module.exports = config
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
