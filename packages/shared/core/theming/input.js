import { thd } from '../utils/index'
import { borderWidth } from './border'
import { lineHeightBase, lineHeightSm, lineHeightLg } from './typography'
import { gray300, white, gray100, gray600, gray900 } from './color'

export const inputBtnPaddingY = thd('inputBtnPaddingY', '.375rem')
export const inputBtnPaddingX = thd('inputBtnPaddingX', '.75rem')
export const inputBtnLineHeight = thd('inputBtnLineHeight', lineHeightBase)

export const inputBtnPaddingYSm = thd('inputBtnPaddingYSm', '.25rem')
export const inputBtnPaddingXSm = thd('inputBtnPaddingXSm', '.5rem')
export const inputBtnLineHeightSm = thd('inputBtnLineHeightSm', lineHeightSm)

export const inputBtnPaddingYLg = thd('inputBtnPaddingYLg', '.5rem')
export const inputBtnPaddingXLg = thd('inputBtnPaddingXLg', '1rem')
export const inputBtnLineHeightLg = thd('inputBtnLineHeightLg', lineHeightLg)

export const inputPaddingY = thd('inputPaddingY', inputBtnPaddingY)
export const inputPaddingX = thd('inputPaddingX', inputBtnPaddingX)
export const inputLineHeight = thd('inputLineHeight', inputBtnLineHeight)

export const inputPaddingYSm = thd('inputPaddingYSm', inputBtnPaddingYSm)
export const inputPaddingXSm = thd('inputPaddingXSm', inputBtnPaddingXSm)
export const inputLineHeightSm = thd('inputLineHeightSm', inputBtnLineHeightSm)

export const inputPaddingYLg = thd('inputPaddingYLg', inputBtnPaddingYLg)
export const inputPaddingXLg = thd('inputPaddingXLg', inputBtnPaddingXLg)
export const inputLineHeightLg = thd('inputLineHeightLg', inputBtnLineHeightLg)

export const inputBorderWidth = thd('inputBorderWidth', borderWidth)
export const inputBorderColor = thd('inputBorderColor', gray300)
export const inputBgColor = thd('inputBgColor', white)
export const inputDisabledBgColor = thd('inputDisabledBgColor', gray100)
export const inputDisabledText = thd('inputDisabledText', gray600)
export const inputPlaceholderText = thd('inputPlaceholderText', gray600)
export const inputTextColor = thd('inputTextColor', gray900)
