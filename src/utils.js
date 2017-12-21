import { css } from 'styled-components'
import defaultTheme from './style/defaultTheme'

const getBreakPoints = props =>
  (props.theme && props.theme.breakPoints) || defaultTheme.breakPoints

export const upTo = (breakPoint, code) => css`
  @media (min-width: ${props => getBreakPoints(props)[breakPoint]}px) {
    ${code};
  }
`
