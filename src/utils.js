import { css } from 'styled-components'
import { breakPoints as defaultBreakPoints } from './style/defaultTheme'

const getBreakPoints = props =>
  (props.theme && props.theme.breakPoints) || defaultBreakPoints

export const upTo = (breakPoint, code) => css`
  @media (min-width: ${props => getBreakPoints(props)[breakPoint]}px) {
    ${code};
  }
`
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
