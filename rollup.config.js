import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import pkg from './package.json'

const SOURCE_DIR = path.resolve(__dirname, 'src')
const OUT_DIR = path.resolve(__dirname, 'build')

const baseConfig = {
  input: `${SOURCE_DIR}/index.js`,
  external: ['react', 'styled-components'],
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
    'recompact/getDisplayName',
    'recompact/isClassComponent',
  ],
})

const umdConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'smooth-ui',
    file: `${OUT_DIR}/dist/smooth-ui.js`,
    globals: {
      react: 'React',
      'styled-components': 'styled',
    },
    format: 'umd',
  },
  plugins: [
    ...baseConfig.plugins,
    resolve({ browser: true }),
    commonjs(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ],
})

const minConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'smooth-ui',
    file: `${OUT_DIR}/dist/smooth-ui.min.js`,
    globals: {
      react: 'React',
      'styled-components': 'styled',
    },
    format: 'umd',
  },
  plugins: [
    ...baseConfig.plugins,
    resolve({ browser: true }),
    commonjs(),
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

export default [esConfig, cjsConfig, umdConfig, minConfig]
