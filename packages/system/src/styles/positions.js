import { style, compose } from '../style'
import { px } from '../unit'

export const position = style({
  prop: 'position',
})

export const zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndexes',
})

export const top = style({
  prop: 'top',
  transform: px,
})

export const right = style({
  prop: 'right',
  transform: px,
})

export const bottom = style({
  prop: 'bottom',
  transform: px,
})

export const left = style({
  prop: 'left',
  transform: px,
})

export const positions = compose(
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
)
