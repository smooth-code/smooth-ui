import { transparentize, lighten } from 'polished'
import { css } from '../styled-engine'
import { mixin } from '../utils/index'

export const baseFocus = mixin('baseFocus', color => () => css`
  outline: 0;
  border-color: ${lighten(0.25, color)};
  box-shadow: 0 0 2px ${transparentize(0.1, color)};
`)

export const controlFocus = mixin('controlFocus', color => () => css`
  box-shadow: 0 0 0 0.2rem ${transparentize(0.75, color)};
`)
