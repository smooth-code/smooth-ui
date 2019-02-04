import { darken } from 'polished'
import { css } from '../styled-engine'
import { thd, mixin } from '../utils/index'
import { colorVariant, colorYik } from './color'
import { baseFocus } from './control'
import {
  inputBtnPaddingY,
  inputBtnPaddingX,
  inputBtnLineHeight,
  inputBtnPaddingYSm,
  inputBtnPaddingXSm,
  inputBtnLineHeightSm,
  inputBtnPaddingYLg,
  inputBtnPaddingXLg,
  inputBtnLineHeightLg,
} from './input'

export const btnPaddingY = thd('btnPaddingY', inputBtnPaddingY)
export const btnPaddingX = thd('btnPaddingX', inputBtnPaddingX)
export const btnLineHeight = thd('btnLineHeight', inputBtnLineHeight)

export const btnPaddingYSm = thd('btnPaddingYSm', inputBtnPaddingYSm)
export const btnPaddingXSm = thd('btnPaddingXSm', inputBtnPaddingXSm)
export const btnLineHeightSm = thd('btnLineHeightSm', inputBtnLineHeightSm)

export const btnPaddingYLg = thd('btnPaddingYLg', inputBtnPaddingYLg)
export const btnPaddingXLg = thd('btnPaddingXLg', inputBtnPaddingXLg)
export const btnLineHeightLg = thd('btnLineHeightLg', inputBtnLineHeightLg)

export const btnBorderWidth = thd('btnBorderWidth', 0)
export const btnDisabledOpacity = thd('btnDisabledOpacity', 0.8)

export const btnVariant = mixin('btnVariant', variant => p => {
  const color = colorVariant(variant)(p)
  return css`
    color: ${colorYik(color)(p)};
    background-color: ${color};

    &:focus {
      ${baseFocus(color)(p)};
    }

    &:not(:disabled):hover,
    &:not(:disabled):active {
      background-color: ${darken(0.05, color)};
    }
  `
})
