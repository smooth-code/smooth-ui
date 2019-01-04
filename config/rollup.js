import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import copy from 'rollup-plugin-cpy'
import { uglify } from 'rollup-plugin-uglify'

// eslint-disable-next-line
const babelConfig = require('../../.babelrc')

export const getRollupConfig = ({ pkg, pwd, buildName }) => {
  const SOURCE_DIR = path.resolve(pwd, 'src')
  const DIST_DIR = path.resolve(pwd, 'dist')
  const CORE_DIR = path.resolve(pwd, '../shared/core');

  const baseConfig = {
    input: `${SOURCE_DIR}/index.js`,
    plugins: [
      babel({
        "exclude": "**/node_modules/**",
        ...babelConfig
      }),
      copy({
        "files": `${CORE_DIR}/*.d.ts`,
        "dest": DIST_DIR
      })
    ],
  }

  const esConfig = Object.assign({}, baseConfig, {
    output: {
      file: `${DIST_DIR}/${buildName}.es.js`,
      format: 'es',
    },
    external: [
      ...Object.keys(pkg.peerDependencies),
      ...Object.keys(pkg.dependencies),
      'react-transition-group/Transition',
    ],
  })

  const cjsConfig = Object.assign({}, esConfig, {
    output: {
      file: `${DIST_DIR}/${buildName}.cjs.js`,
      format: 'cjs',
    },
  })

  const globals = {
    classnames: 'classNames',
    polished: 'polished',
    'prop-types': 'PropTypes',
    'emotion-theming': 'emotionTheming',
    emotion: 'emotion',
    react: 'React',
    'react-dom': 'ReactDom',
    'react-emotion': 'reactEmotion',
    'styled-components': 'styled',
  }

  const umdConfig = Object.assign({}, baseConfig, {
    output: {
      name: 'smoothUI',
      file: `${DIST_DIR}/${buildName}.js`,
      format: 'umd',
      globals,
      exports: 'named',
      sourcemap: false,
    },
    external: Object.keys(globals),
    plugins: [...baseConfig.plugins, resolve({ browser: true }), commonjs()],
  })

  const minConfig = Object.assign({}, umdConfig, {
    output: {
      ...umdConfig.output,
      file: `${DIST_DIR}/${buildName}.min.js`,
    },
    plugins: [
      ...umdConfig.plugins,
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false,
        },
      }),
    ],
  })

  if (process.env.WATCH_MODE) {
    return [esConfig]
  }

  return [esConfig, cjsConfig, umdConfig, minConfig]
}
