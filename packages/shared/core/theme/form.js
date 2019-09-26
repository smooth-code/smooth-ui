import { th } from '@xstyled/system'
import { SCALES } from '../util'
import { colors as baseColors, lineHeights as baseLineHeight } from './common'

export const space = {
  textFormControl: {
    x: {
      xs: '4rpx',
      sm: '8rpx',
      base: '10rpx',
      lg: '14rpx',
      xl: '18rpx',
    },
    y: {
      xs: '3rpx',
      sm: '4rpx',
      base: '6rpx',
      lg: '8rpx',
      xl: '10rpx',
    },
  },
}

export const colors = {
  ...baseColors,
  formControl: {
    background: th.color('lighter'),
    border: th.color('light400'),
    text: th.color('light900'),
    placeholder: th.color('light600'),
    disabled: {
      background: th.color('light100'),
      text: th.color('light900'),
    },
  },
}

export const borderWidths = {
  formControl: SCALES.reduce((obj, scale) => {
    obj[scale] = '1rpx'
    return obj
  }, {}),
}

export const lineHeights = {
  ...baseLineHeight,
  formControl: SCALES.reduce((obj, scale) => {
    obj[scale] = th.lineHeight(scale)
    return obj
  }, {}),
}
