import { style, px } from './system'
import { num } from './misc'
import composeStyles from './composeStyles'
import space from './space'

// Basic

export const opacity = style({
  prop: 'opacity',
})

export const overflow = style({
  prop: 'overflow',
})

export const basics = composeStyles(opacity, overflow)

// Typography

export const fontFamily = style({
  prop: 'fontFamily',
  variants: 'fonts',
})

export const fontSize = style({
  prop: 'fontSize',
  variants: 'fontSizes',
  transform: px,
})

export const lineHeight = style({
  prop: 'lineHeight',
  variants: 'lineHeights',
})

export const fontWeight = style({
  prop: 'fontWeight',
  variants: 'fontWeights',
})

export const textAlign = style({
  prop: 'textAlign',
})

export const letterSpacing = style({
  prop: 'letterSpacing',
  variants: 'letterSpacings',
  transform: px,
})

export const color = style({
  prop: 'color',
  variants: 'colors',
})

export const typography = composeStyles(
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  textAlign,
  letterSpacing,
  color,
)

// Dimensions

const getDimension = n => (!num(n) || n > 1 ? px(n) : `${n * 100}%`)

export const width = style({
  prop: 'width',
  transform: getDimension,
  variants: 'widths',
})

export const height = style({
  prop: 'height',
  transform: getDimension,
  variants: 'heights',
})

export const maxWidth = style({
  prop: 'maxWidth',
  transform: getDimension,
  variants: 'widths',
})

export const maxHeight = style({
  prop: 'maxHeight',
  transform: getDimension,
  variants: 'heights',
})

export const minWidth = style({
  prop: 'minWidth',
  transform: getDimension,
  variants: 'widths',
})

export const minHeight = style({
  prop: 'minHeight',
  transform: getDimension,
  variants: 'heights',
})

export const dimensions = composeStyles(
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
)

// Space

export { space }

// Flexbox

export const display = style({
  prop: 'display',
})

export const alignItems = style({
  prop: 'alignItems',
})

export const alignContent = style({
  prop: 'alignContent',
})

export const justifyContent = style({
  prop: 'justifyContent',
})

export const flexWrap = style({
  prop: 'flexWrap',
})

export const flexBasis = style({
  prop: 'flexBasis',
  transform: getDimension,
})

export const flexDirection = style({
  prop: 'flexDirection',
})

export const flex = style({
  prop: 'flex',
})

export const justifySelf = style({
  prop: 'justifySelf',
})

export const alignSelf = style({
  prop: 'alignSelf',
})

export const order = style({
  prop: 'order',
})

export const flexboxes = composeStyles(
  display,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
)

// Background

export const background = style({
  prop: 'background',
})

export const backgroundColor = style({
  prop: 'backgroundColor',
  variants: 'colors',
})

export const backgroundImage = style({
  prop: 'backgroundImage',
})

export const backgroundSize = style({
  prop: 'backgroundSize',
})

export const backgroundPosition = style({
  prop: 'backgroundPosition',
})

export const backgroundRepeat = style({
  prop: 'backgroundRepeat',
})

export const backgrounds = composeStyles(
  background,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
)

// Position

export const position = style({
  prop: 'position',
})

export const zIndex = style({
  prop: 'zIndex',
  variants: 'zIndexes',
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

export const positions = composeStyles(
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
)

// Border

const getBorder = n => (num(n) && n > 0 ? `${n}px solid` : n)

export const border = style({
  prop: 'border',
  variants: 'borders',
  transform: getBorder,
})

export const borderTop = style({
  prop: 'borderTop',
  variants: 'borders',
  transform: getBorder,
})

export const borderRight = style({
  prop: 'borderRight',
  variants: 'borders',
  transform: getBorder,
})

export const borderBottom = style({
  prop: 'borderBottom',
  variants: 'borders',
  transform: getBorder,
})

export const borderLeft = style({
  prop: 'borderLeft',
  variants: 'borders',
  transform: getBorder,
})

export const borderColor = style({
  prop: 'borderColor',
  variants: 'colors',
})

export const borderRadius = style({
  prop: 'borderRadius',
  variants: 'radii',
  transform: px,
})

export const boxShadow = style({
  prop: 'boxShadow',
  variants: 'shadows',
})

export const borders = composeStyles(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderRadius,
  boxShadow,
)

export const system = composeStyles(
  basics,
  typography,
  dimensions,
  space,
  flexboxes,
  backgrounds,
  positions,
  borders,
)
