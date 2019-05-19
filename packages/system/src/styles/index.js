import { compose } from '../style'
import { backgrounds } from './backgrounds'
import { basics } from './basics'
import { borders } from './borders'
import { layouts } from './layouts'
import { flexboxes } from './flexboxes'
import { grids } from './grids'
import { positions } from './positions'
import { space } from './space'
import { typographies } from './typographies'

export * from './backgrounds'
export * from './basics'
export * from './borders'
export * from './flexboxes'
export * from './grids'
export * from './layouts'
export * from './positions'
export * from './space'
export * from './typographies'

export const system = compose(
  backgrounds,
  basics,
  borders,
  flexboxes,
  grids,
  layouts,
  positions,
  space,
  typographies,
)
