import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const SOURCE_DIR = path.resolve(__dirname, 'src')
const OUT_DIR = path.resolve(__dirname, 'build')

const baseConfig = {
  input: `${SOURCE_DIR}/index.js`,
  external: Object.keys(pkg.peerDependencies),
  plugins: [babel({ exclude: '**/node_modules/**' })],
}

const esConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'smooth-ui',
    file: `${OUT_DIR}/dist/smooth-ui.es.js`,
    format: 'es',
  },
  external: [
    ...baseConfig.external,
    ...Object.keys(pkg.dependencies),
    'react-transition-group/Transition',
    'recompact/getDisplayName',
    'recompact/isClassComponent',
  ],
})

const cjsConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'smooth-ui',
    file: `${OUT_DIR}/dist/smooth-ui.cjs.js`,
    format: 'cjs',
  },
  external: [
    ...baseConfig.external,
    ...Object.keys(pkg.dependencies),
    'react-transition-group/Transition',
    'recompact/getDisplayName',
    'recompact/isClassComponent',
  ],
})

const globals = {
  react: 'React',
  'react-dom': 'ReactDom',
  'prop-types': 'PropTypes',
  'styled-components': 'styled',
  'react-transition-group/Transition': 'Transition',
  polished: 'polished',
}

const umdConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'smooth-ui',
    file: `${OUT_DIR}/dist/smooth-ui.js`,
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
    file: `${OUT_DIR}/dist/smooth-ui.min.js`,
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
