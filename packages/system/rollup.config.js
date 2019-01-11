import { getRollupConfig } from '../../config/rollup'
import pkg from './package.json'

export default getRollupConfig({
  pwd: __dirname,
  buildName: 'smooth-ui-system',
  name: 'system',
  pkg,
})
