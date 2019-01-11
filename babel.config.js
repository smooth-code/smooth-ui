const { STYLED_ENGINE = 'styled-components' } = process.env

const getStyledEnginePlugins = () => {
  if (process.env.NODE_ENV === 'test') return []

  switch (STYLED_ENGINE) {
    case 'emotion':
      return ['babel-plugin-emotion']
    case 'styled-components':
      return [['babel-plugin-styled-components', { displayName: false }]]
    default:
      return []
  }
}

let config = {
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
    'babel-plugin-annotate-pure-calls',
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}

if (process.env.NODE_ENV === 'test') {
  config = Object.assign({}, config, {
    plugins: [
      ...config.plugins,
      ['@babel/plugin-transform-modules-commonjs', { loose: true }],
    ],
  })
}

module.exports = config
