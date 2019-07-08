const { STYLED_ENGINE = 'styled-components', NODE_ENV } = process.env

function getStyledEnginePlugins() {
  if (NODE_ENV === 'test') return []

  switch (STYLED_ENGINE) {
    case 'emotion':
      return ['babel-plugin-emotion']
    case 'styled-components':
      return [['babel-plugin-styled-components', { displayName: false }]]
    default:
      return []
  }
}

module.exports = api => {
  api.cache(true)

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
              original: '(.*)xstyled/x$',
              replacement: `$1xstyled/${STYLED_ENGINE}`,
            },
          ],
        },
      ],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  }

  if (NODE_ENV === 'test') {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        ['@babel/plugin-transform-modules-commonjs', { loose: true }],
      ],
    }
  }

  return config
}
