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

const getBreakpointsEntries = p => {
  const bks = breakpoints(p)
  const entries = Object.keys(bks).reduce(
    (entries, key) => [...entries, [key, bks[key]]],
    [],
  )
  return entries.sort((a, b) => a[1] > b[1])
}

const getNextBreakpoint = (name, p) => {
  const entries = getBreakpointsEntries(p)
  const index = entries.findIndex(([key]) => key === name)
  return index < entries.length - 1 ? entries[index + 1][0] : null
}

const getPreviousBreakpoint = (name, p) => {
  const entries = getBreakpointsEntries(p)
  const index = entries.findIndex(([key]) => key === name)
  return index >= 1 ? entries[index - 1][0] : null
}

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
  const next = getNextBreakpoint(name, p)
  return next ? getBreakpointMin(next, p) - 0.02 : null
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
  const next = getNextBreakpoint(name, p)
  const previous = getPreviousBreakpoint(name, p)
  const value = getBreakpointMax(previous, p)
  if (next === null) return code
  return css`
    ${mediaMaxWidth(value)} {
      ${code};
    }
  `
})

export const between = mixin('between', (lower, upper, code) => p => {
  const min = getBreakpointMin(lower, p)
  const max = getBreakpointMax(upper, p)
  const upperPrevious = getPreviousBreakpoint(upper, p)
  const previousMax = getBreakpointMax(upperPrevious, p)

  if (min !== null && max !== null) {
    return css`
      ${mediaBetweenWidth(min, previousMax)} {
        ${code};
      }
    `
  }
  if (max === null) return up(lower, code)(p)
  if (min === null) return down(upper, code)(p)
  return null
})
