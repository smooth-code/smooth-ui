import { style, compose } from '../style'
import { percent } from '../unit'

export const display = style({
  prop: 'display',
})

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
  themeKey: 'maxWidths',
})

export const maxHeight = style({
  prop: 'maxHeight',
  transform: percent,
  themeKey: 'maxHeights',
})

export const minWidth = style({
  prop: 'minWidth',
  transform: percent,
  themeKey: 'minWidths',
})

export const minHeight = style({
  prop: 'minHeight',
  transform: percent,
  themeKey: 'minHeights',
})

export const size = style({
  prop: 'size',
  cssProperties: ['width', 'height'],
  themeKey: 'sizes',
  transform: percent,
})

export const verticalAlign = style({
  prop: 'verticalAlign',
})

export const layouts = compose(
  display,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  size,
  verticalAlign,
)
