import { mix, parseToRgb, lighten } from 'polished'
import { thd, mixin } from '../utils/index'

export const black = thd('black', '#000')
export const white = thd('white', '#fff')

export const gray100 = thd('gray100', '#f8f9fa')
export const gray200 = thd('gray200', '#e9ecef')
export const gray300 = thd('gray300', '#dee2e6')
export const gray400 = thd('gray400', '#ced4da')
export const gray500 = thd('gray500', '#adb5bd')
export const gray600 = thd('gray600', '#6c757d')
export const gray700 = thd('gray700', '#495057')
export const gray800 = thd('gray800', '#343a40')
export const gray900 = thd('gray900', '#212529')

export const blue = thd('blue', '#007bff')
export const indigo = thd('indigo', '#6610f2')
export const purple = thd('purple', '#6f42c1')
export const pink = thd('pink', '#e83e8c')
export const red = thd('red', '#dc3545')
export const brick = thd('brick', '#bd4932')
export const orange = thd('orange', '#fd7e14')
export const yellow = thd('yellow', '#ffc107')
export const green = thd('green', '#28a745')
export const teal = thd('teal', '#20c997')
export const cyan = thd('cyan', '#17a2b8')

export const primary = thd('primary', brick)
export const secondary = thd('secondary', gray600)
export const success = thd('success', green)
export const info = thd('info', cyan)
export const warning = thd('warning', yellow)
export const danger = thd('danger', red)
export const light = thd('light', gray100)
export const dark = thd('dark', gray800)

export const primaryLight = thd('primaryLight', p => lighten(0.3, primary(p)))
export const secondaryLight = thd('secondaryLight', p =>
  lighten(0.3, secondary(p)),
)

export const colorVariants = thd('colorVariants', [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
])

export const colors = thd('colors', {
  black,
  white,
  gray100,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  gray700,
  gray800,
  gray900,
  blue,
  indigo,
  purple,
  pink,
  red,
  brick,
  orange,
  yellow,
  green,
  teal,
  cyan,
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  light,
  dark,
})

export const colorInterval = thd('colorInterval', 0.08)

export const colorVariant = mixin('colorVariant', variant => p => {
  const thValue = thd(variant)(p)
  if (thValue) return thValue
  const colorValue = colors(p)[variant]
  if (colorValue) return colorValue(p)
  return variant
})

export const colorLevel = mixin('colorLevel', (color, level) => p => {
  const baseColor = level > 0 ? black(p) : white(p)
  const absLevel = Math.abs(level)
  return mix(absLevel * colorInterval(p), baseColor, color)
})

export const yiqContrastedThreshold = thd('yiqContrastedThreshold', 150)
export const yikTextDark = thd('yikTextDark', '#111')
export const yikTextLight = thd('yikTextLight', '#fff')

export const colorYik = mixin('colorYik', color => p => {
  const { red: r, green: g, blue: b } = parseToRgb(color)
  const yik = (r * 299 + g * 587 + b * 114) / 1000
  return yik >= yiqContrastedThreshold(p) ? yikTextDark(p) : yikTextLight(p)
})
