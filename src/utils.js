import { css } from 'styled-components'
import defaultBreakpoints from './style/defaultBreakpoints'

export const getBreakpoints = props =>
  (props && props.theme && props.theme.breakpoints) || defaultBreakpoints

export const getBreakpointsEntries = props => {
  const breakpoints = getBreakpoints(props)
  const entries = Object.keys(breakpoints).reduce(
    (entries, key) => [...entries, [key, breakpoints[key]]],
    [],
  )
  return entries.sort((a, b) => a[1] > b[1])
}

export const getNextBreakpoint = (name, props) => {
  const entries = getBreakpointsEntries(props)
  const index = entries.findIndex(([key]) => key === name)
  return index < entries.length - 1 ? entries[index + 1][0] : null
}

export const getPreviousBreakpoint = (name, props) => {
  const entries = getBreakpointsEntries(props)
  const index = entries.findIndex(([key]) => key === name)
  return index >= 1 ? entries[index - 1][0] : null
}

/**
 * Minimum breakpoint width.
 * Null for the smallest breakpoint.
 */
export const getBreakpointMin = (name, props) => {
  const breakpoints = getBreakpoints(props)
  const breakPoint = breakpoints[name]
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
export const getBreakpointMax = (name, props) => {
  const next = getNextBreakpoint(name, props)
  return next ? getBreakpointMin(next, props) - 0.02 : null
}

export const up = (name, code) => props => {
  const value = getBreakpointMin(name, props)
  if (value === null) return code
  return css`
    @media (min-width: ${value}px) {
      ${code};
    }
  `
}

export const down = (name, code) => props => {
  const value = getBreakpointMax(name, props)
  if (value === null) return code
  return css`
    @media (max-width: ${value}px) {
      ${code};
    }
  `
}

export const between = (lower, upper, code) => props => {
  const min = getBreakpointMin(lower, props)
  const max = getBreakpointMax(upper, props)
  const upperPrevious = getPreviousBreakpoint(upper, props)
  const previousMax = getBreakpointMax(upperPrevious, props)

  if (min !== null && max !== null) {
    return css`
      @media (min-width: ${min}px) and (max-width: ${previousMax}px) {
        ${code};
      }
    `
  }
  if (max === null) return up(lower, code)(props)
  if (min === null) return down(upperPrevious, code)(props)
  return null
}

export const th = (name, modifier = x => x) => props => {
  function run(fn) {
    const next = fn(props)
    if (typeof next === 'undefined')
      throw new Error(`"${name}" not found in theme`)
    if (typeof next === 'function') return run(next)
    return next
  }

  const result = run(p => p.theme[name])
  return modifier(result)
}

export const mixin = (name, ...args) => props =>
  props.theme[name](props)(...args)
