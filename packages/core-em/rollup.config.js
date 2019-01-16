import { getRollupConfig } from '../../config/rollup'
import pkg from './package.json'

export default getRollupConfig({
  pwd: __dirname,
  name: 'smoothUI',
  buildName: 'smooth-ui-core-em',
  pkg,
  copyTypeScriptDefs: true,
})
