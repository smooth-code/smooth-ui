import { css } from '../styled-engine'
import {
  thd,
  mixin,
  mediaMinWidth,
  mediaMaxWidth,
  mediaBetweenWidth,
} from '../utils/index'

export const breakpoints = thd('breakpoints', {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
})

/**
 * Minimum breakpoint width.
 * Null for the smallest breakpoint.
 */
const getBreakpointMin = (name, p) => {
  const bks = breakpoints(p)
  const breakPoint = bks[name]
  return breakPoint !== 0 ? breakPoint : null
}

/**
 * Maximum breakpoint width. Null for the largest (last) breakpoint.
 * The maximum value is calculated as the minimum of the next one less 0.02px
 * to work around the limitations of `min-` and `max-` prefixes and viewports with fractional widths.
 * See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
 * Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
 * See https://bugs.webkit.org/show_bug.cgi?id=178261
 */
const getBreakpointMax = (name, p) => {
  const bks = breakpoints(p)
  const breakPoint = bks[name]
  return breakPoint !== 0 ? breakPoint - 0.02 : null
}

export const up = mixin('up', (name, code) => p => {
  const value = getBreakpointMin(name, p)
  if (value === null) return code
  return css`
    ${mediaMinWidth(value)} {
      ${code};
    }
  `
})

export const down = mixin('down', (name, code) => p => {
  const value = getBreakpointMax(name, p)
  if (value === null) return null
  return css`
    ${mediaMaxWidth(value)} {
      ${code};
    }
  `
})

export const between = mixin('between', (lower, upper, code) => p => {
  const min = getBreakpointMin(lower, p)
  const max = getBreakpointMax(upper, p)

  if (min !== null && max !== null) {
    return css`
      ${mediaBetweenWidth(min, max)} {
        ${code};
      }
    `
  }
  if (max === null) return up(lower, code)(p)
  if (min === null) return down(upper, code)(p)
  return null
})
