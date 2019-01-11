export const minBreakpoint = breakpoint =>
  breakpoint !== 0 ? breakpoint : null

export const minWidth = value => `@media (min-width: ${value}px)`

export const DEFAULT_BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}
