import { style, themeGetter, compose } from '../style'
import { num, negative } from '../util'
import { px as pxUnit } from '../unit'

export const getSpace = themeGetter({
  key: 'space',
  defaultVariants: [0, 4, 8, 16, 24, 48, 96, 144, 192, 240],
  transform: (transformedValue, { rawValue, variants }) => {
    if (!num(rawValue)) {
      return variants[rawValue] || rawValue
    }
    const abs = Math.abs(rawValue)
    const neg = negative(rawValue)
    const value = variants[abs] || abs
    if (!num(value)) {
      return pxUnit(neg ? `-${value}` : value)
    }
    return pxUnit(value * (neg ? -1 : 1))
  },
})

export const m = style({
  prop: 'm',
  cssProperties: ['margin'],
  themeGet: getSpace,
})

export const mt = style({
  prop: 'mt',
  cssProperties: ['marginTop'],
  themeGet: getSpace,
})

export const mr = style({
  prop: 'mr',
  cssProperties: ['marginRight'],
  themeGet: getSpace,
})

export const mb = style({
  prop: 'mb',
  cssProperties: ['marginBottom'],
  themeGet: getSpace,
})

export const ml = style({
  prop: 'ml',
  cssProperties: ['marginLeft'],
  themeGet: getSpace,
})

export const mx = style({
  prop: 'mx',
  cssProperties: ['marginRight', 'marginLeft'],
  themeGet: getSpace,
})

export const my = style({
  prop: 'my',
  cssProperties: ['marginTop', 'marginBottom'],
  themeGet: getSpace,
})

export const p = style({
  prop: 'p',
  cssProperties: ['padding'],
  themeGet: getSpace,
})

export const pt = style({
  prop: 'pt',
  cssProperties: ['paddingTop'],
  themeGet: getSpace,
})

export const pr = style({
  prop: 'pr',
  cssProperties: ['paddingRight'],
  themeGet: getSpace,
})

export const pb = style({
  prop: 'pb',
  cssProperties: ['paddingBottom'],
  themeGet: getSpace,
})

export const pl = style({
  prop: 'pl',
  cssProperties: ['paddingLeft'],
  themeGet: getSpace,
})

export const px = style({
  prop: 'px',
  cssProperties: ['paddingRight', 'paddingLeft'],
  themeGet: getSpace,
})

export const py = style({
  prop: 'py',
  cssProperties: ['paddingTop', 'paddingBottom'],
  themeGet: getSpace,
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
