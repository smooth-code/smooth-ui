import { transparentize, lighten } from 'polished'
import { th } from '@xstyled/system'
import { css } from '../../util/interop'

export const mixins = {
  baseFocus: color => p => {
    const colorValue = th.color(color)(p)
    return css`
      outline: 0;
      border-color: ${lighten(0.25, colorValue)};
      box-shadow: 0 0 ${th.px('2rpx')(p)} ${transparentize(0.1, colorValue)};
    `(p)
  },
  controlFocus: color => p => {
    const colorValue = th.color(color)(p)
    return css`
      outline: 0;
      border-color: ${lighten(0.25, colorValue)};
      box-shadow: 0 0 0 ${th.px('4rpx')(p)} ${transparentize(0.75, colorValue)};
    `(p)
  },
}
