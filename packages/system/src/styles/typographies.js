import { px } from '../unit'
import { style, compose } from '../style'

const DEFAULT_FONT_SIZES = [12, 14, 16, 20, 24, 32, 48, 64, 72]

function transformFontSize(
  transformedValue,
  { rawValue, variants = DEFAULT_FONT_SIZES },
) {
  return variants[rawValue] || rawValue
}

export const fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'fonts',
})

export const fontSize = style({
  prop: 'fontSize',
  themeKey: 'fontSizes',
  transform: transformFontSize,
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

export const textTransform = style({
  prop: 'textTransform',
})

export const typographies = compose(
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  color,
  textTransform,
)
