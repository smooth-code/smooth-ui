import { style, compose } from '../style'
import { num, negative } from '../util'

const DEFAULT_SPACING = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72]

function transform(transformedValue, { rawValue, variants = DEFAULT_SPACING }) {
  if (!num(rawValue)) {
    return variants[rawValue] || rawValue
  }
  const abs = Math.abs(rawValue)
  const neg = negative(rawValue)
  const value = variants[abs] || abs
  if (!num(value)) {
    return neg ? `-${value}` : value
  }
  return value * (neg ? -1 : 1)
}

const themeKey = 'spaces'

export const m = style({
  prop: 'm',
  cssProperties: ['margin'],
  themeKey,
  transform,
})

export const mt = style({
  prop: 'mt',
  cssProperties: ['marginTop'],
  themeKey,
  transform,
})

export const mr = style({
  prop: 'mr',
  cssProperties: ['marginRight'],
  themeKey,
  transform,
})

export const mb = style({
  prop: 'mb',
  cssProperties: ['marginBottom'],
  themeKey,
  transform,
})

export const ml = style({
  prop: 'ml',
  cssProperties: ['marginLeft'],
  themeKey,
  transform,
})

export const mx = style({
  prop: 'mx',
  cssProperties: ['marginRight', 'marginLeft'],
  themeKey,
  transform,
})

export const my = style({
  prop: 'my',
  cssProperties: ['marginTop', 'marginBottom'],
  themeKey,
  transform,
})

export const p = style({
  prop: 'p',
  cssProperties: ['padding'],
  themeKey,
  transform,
})

export const pt = style({
  prop: 'pt',
  cssProperties: ['paddingTop'],
  themeKey,
  transform,
})

export const pr = style({
  prop: 'pr',
  cssProperties: ['paddingRight'],
  themeKey,
  transform,
})

export const pb = style({
  prop: 'pb',
  cssProperties: ['paddingBottom'],
  themeKey,
  transform,
})

export const pl = style({
  prop: 'pl',
  cssProperties: ['paddingLeft'],
  themeKey,
  transform,
})

export const px = style({
  prop: 'px',
  cssProperties: ['paddingRight', 'paddingLeft'],
  themeKey,
  transform,
})

export const py = style({
  prop: 'py',
  cssProperties: ['paddingTop', 'paddingBottom'],
  themeKey,
  transform,
})

export const space = compose(
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
)
