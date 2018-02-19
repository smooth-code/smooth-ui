import { css } from 'styled-components'
import { breakPoints as defaultBreakPoints } from './style/defaultTheme'

const getBreakPoints = props =>
  (props.theme && props.theme.breakPoints) || defaultBreakPoints

export const upTo = (breakPoint, code) => css`
  @media (min-width: ${props => getBreakPoints(props)[breakPoint]}px) {
    ${code};
  }
`
export const th = (value, modifier = x => x) => props => {
  function run(fn) {
    const next = fn(props)
    if (typeof next === 'undefined')
      throw new Error(`"${value}" not found in theme`)
    if (typeof next === 'function') return run(next)
    return next
  }

  const result = run(p => p.theme[value])
  return modifier(result)
}
