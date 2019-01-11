import { px } from '../unit'
import { style, compose } from '../style'

export const fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'fonts',
})

export const fontSize = style({
  prop: 'fontSize',
  themeKey: 'fontSizes',
})

export const lineHeight = style({
  prop: 'lineHeight',
  themeKey: 'lineHeights',
})

export const fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'fontWeights',
})

export const textAlign = style({
  prop: 'textAlign',
})

export const letterSpacing = style({
  prop: 'letterSpacing',
  themeKey: 'letterSpacings',
  transform: px,
})

export const color = style({
  prop: 'color',
  themeKey: 'colors',
})

export const typography = compose(
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  color,
)
