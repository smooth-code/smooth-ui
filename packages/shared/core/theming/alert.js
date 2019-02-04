import { darken } from 'polished'
import { css } from '../styled-engine'
import { thd, mixin } from '../utils/index'
import { colorLevel, colorVariant } from './color'

export const alertPaddingY = thd('alertPaddingY', '.75rem')
export const alertPaddingX = thd('alertPaddingX', '1.25rem')
export const alertMarginBottom = thd('alertMarginBottom', '1rem')

export const alertColorLevel = thd('alertColorLevel', 6)
export const alertBgLevel = thd('alertBgLevel', -10)
export const alertBorderLevel = thd('alertBorderLevel', -9)

export const alertVariant = mixin('alertVariant', variant => p => {
  const variantColor = colorVariant(variant)(p)
  const color = colorLevel(variantColor, alertColorLevel(p))(p)
  const bgColor = colorLevel(variantColor, alertBgLevel(p))(p)
  const borderColor = colorLevel(variantColor, alertBorderLevel(p))(p)
  const hrColor = darken(0.05, color)

  return css`
    color: ${color};
    background-color: ${bgColor};
    border-color: ${borderColor};

    hr {
      border-top-color: ${hrColor};
    }
  `
})
