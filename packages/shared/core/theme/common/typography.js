/* eslint-disable no-use-before-define */
import { th } from '@xstyled/system'
import { scale, SCALES } from '../../util'

export const fontSizes = scale('1rem', th.fontSize('base'))

export const fonts = {
  base:
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
}

// From https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Common_weight_name_mapping
export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
}

export const lineHeights = SCALES.reduce(
  (obj, scale) => {
    obj[scale] = 1.5
    return obj
  },
  { button: {} },
)
