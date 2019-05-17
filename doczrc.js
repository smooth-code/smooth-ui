import * as path from 'path'
import externalLinks from 'remark-external-links'

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@smooth-ui': path.resolve(__dirname, 'packages'),
    '@docs': path.resolve(__dirname, 'docs'),
  })

  return config
}

export default {
  debug: true,
  title: 'Smooth UI',
  description: 'Modern UI library for React',
  repository: 'https://github.com/smooth-code/smooth-ui',
  indexHtml: 'docs/index.html',
  ordering: 'ascending',
  propsParser: false,
  mdPlugins: [externalLinks.default],
  modifyBundlerConfig,
  wrapper: 'docs/config/Wrapper.js',
  codeSandbox: false,
  menu: [
    'Home',
    'Getting Started',
    'Basics',
    'System',
    'Advanced',
    'Components',
    'Utilities',
    'Compatibility',
  ],
  themeConfig: {
    repository: 'https://github.com/smooth-code/smooth-ui',
    colors: {
      primary: '#bd4932',
      link: '#bd4932',
    },
    logo: {
      src:
        'https://raw.githubusercontent.com/smooth-code/smooth-ui/master/resources/smooth-ui-logo-horizontal.png',
      width: 200,
    },
  },
}
