import { style, compose } from '../style'
import { transformSpace } from '../unit'

const themeKey = 'space'

export const m = style({
  prop: 'm',
  cssProperties: ['margin'],
  themeKey,
  transform: transformSpace,
})

export const mt = style({
  prop: 'mt',
  cssProperties: ['marginTop'],
  themeKey,
  transform: transformSpace,
})

export const mr = style({
  prop: 'mr',
  cssProperties: ['marginRight'],
  themeKey,
  transform: transformSpace,
})

export const mb = style({
  prop: 'mb',
  cssProperties: ['marginBottom'],
  themeKey,
  transform: transformSpace,
})

export const ml = style({
  prop: 'ml',
  cssProperties: ['marginLeft'],
  themeKey,
  transform: transformSpace,
})

export const mx = style({
  prop: 'mx',
  cssProperties: ['marginRight', 'marginLeft'],
  themeKey,
  transform: transformSpace,
})

export const my = style({
  prop: 'my',
  cssProperties: ['marginTop', 'marginBottom'],
  themeKey,
  transform: transformSpace,
})

export const p = style({
  prop: 'p',
  cssProperties: ['padding'],
  themeKey,
  transform: transformSpace,
})

export const pt = style({
  prop: 'pt',
  cssProperties: ['paddingTop'],
  themeKey,
  transform: transformSpace,
})

export const pr = style({
  prop: 'pr',
  cssProperties: ['paddingRight'],
  themeKey,
  transform: transformSpace,
})

export const pb = style({
  prop: 'pb',
  cssProperties: ['paddingBottom'],
  themeKey,
  transformtransformSpace: transformSpace,
})

export const pl = style({
  prop: 'pl',
  cssProperties: ['paddingLeft'],
  themeKey,
  transform: transformSpace,
})

export const px = style({
  prop: 'px',
  cssProperties: ['paddingRight', 'paddingLeft'],
  themeKey,
  transform: transformSpace,
})

export const py = style({
  prop: 'py',
  cssProperties: ['paddingTop', 'paddingBottom'],
  themeKey,
  transform: transformSpace,
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
