import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const SOURCE_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'build', process.env.STYLED_ENGINE)
const DIST_DIR = path.resolve(BUILD_DIR, 'dist')

const baseConfig = {
  input: `${SOURCE_DIR}/index.js`,
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.enginePeerDependencies.emotion),
    ...Object.keys(pkg.enginePeerDependencies['styled-components']),
  ],
  plugins: [babel({ exclude: '**/node_modules/**' })],
}

const esConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'smoothUi',
    file: `${DIST_DIR}/smooth-ui.es.js`,
    format: 'es',
  },
  external: [
    ...baseConfig.external,
    ...Object.keys(pkg.dependencies),
    'react-transition-group/Transition',
  ],
})

const cjsConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'smoothUi',
    file: `${DIST_DIR}/smooth-ui.cjs.js`,
    format: 'cjs',
  },
  external: [
    ...baseConfig.external,
    ...Object.keys(pkg.dependencies),
    'react-transition-group/Transition',
  ],
})

const globals = {
  react: 'React',
  'react-dom': 'ReactDom',
  'prop-types': 'PropTypes',
  'styled-components': 'styled',
  'react-emotion': 'reactEmotion',
  'emotion-theming': 'emotionTheming',
  'react-transition-group/Transition': 'Transition',
  polished: 'polished',
}

const umdConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'smoothUi',
    file: `${DIST_DIR}/smooth-ui.js`,
    format: 'umd',
    globals,
    exports: 'named',
    sourcemap: true,
  },
  external: Object.keys(globals),
  plugins: [
    ...baseConfig.plugins,
    resolve({ browser: true }),
    commonjs(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ],
})

const minConfig = Object.assign({}, baseConfig, umdConfig, {
  output: {
    ...umdConfig.output,
    file: `${DIST_DIR}/smooth-ui.min.js`,
  },
  plugins: [
    ...umdConfig.plugins,
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

export default [esConfig, cjsConfig, umdConfig, minConfig]
