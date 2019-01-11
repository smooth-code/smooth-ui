import { style, compose } from '../style'
import { percent } from '../unit'

export const width = style({
  prop: 'width',
  transform: percent,
  themeKey: 'widths',
})

export const height = style({
  prop: 'height',
  transform: percent,
  themeKey: 'heights',
})

export const maxWidth = style({
  prop: 'maxWidth',
  transform: percent,
  themeKey: 'widths',
})

export const maxHeight = style({
  prop: 'maxHeight',
  transform: percent,
  themeKey: 'heights',
})

export const minWidth = style({
  prop: 'minWidth',
  transform: percent,
  themeKey: 'widths',
})

export const minHeight = style({
  prop: 'minHeight',
  transform: percent,
  themeKey: 'heights',
})

export const dimensions = compose(
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
)
