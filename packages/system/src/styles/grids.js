import { style, compose } from '../style'
import { transformSpace } from '../unit'

export const gridGap = style({
  prop: 'gridGap',
  themeKey: 'spaces',
  transformValue: transformSpace,
})

export const gridColumnGap = style({
  prop: 'gridColumnGap',
  themeKey: 'spaces',
  transformValue: transformSpace,
})

export const gridRowGap = style({
  prop: 'gridRowGap',
  themeKey: 'spaces',
  transformValue: transformSpace,
})

export const gridColumn = style({ prop: 'gridColumn' })
export const gridRow = style({ prop: 'gridRow' })
export const gridAutoFlow = style({ prop: 'gridAutoFlow' })
export const gridAutoColumns = style({ prop: 'gridAutoColumns' })
export const gridAutoRows = style({ prop: 'gridAutoRows' })
export const gridTemplateColumns = style({ prop: 'gridTemplateColumns' })
export const gridTemplateRows = style({ prop: 'gridTemplateRows' })
export const gridTemplateAreas = style({ prop: 'gridTemplateAreas' })
export const gridArea = style({ prop: 'gridArea' })

export const grids = compose(
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
)
