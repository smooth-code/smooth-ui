import { modularScale } from 'polished'
import { thd } from '../utils/index'

export const fontSizes = thd('fontSizes', [12, 14, 16, 20, 24, 32, 48, 64, 72])

export const fontFamily = thd(
  'fontFamily',
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
)

export const fontSizeBase = thd('fontSizeBase', '1rem')
export const fontSizeSm = thd('fontSizeSm', '1rem', s => modularScale(-1, s))
export const fontSizeLg = thd('fontSizeLg', '1rem', s => modularScale(1, s))

export const fontWeightLight = thd('fontWeightLight', 300)
export const fontWeightNormal = thd('fontWeightNormal', 400)
export const fontWeightBold = thd('fontWeightBold', 700)

export const lineHeightBase = thd('lineHeightBase', 1.5)
export const lineHeightSm = thd('lineHeightSm', 1.5)
export const lineHeightLg = thd('lineHeightLg', 1.5)
