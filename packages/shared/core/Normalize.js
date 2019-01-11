import { normalize } from 'polished'
import { th } from './utils/system'
import * as theme from './theme'
import { createGlobalStyle } from './styled-engine'

export const Normalize = createGlobalStyle`
  ${normalize()}
  html,
  body {
    font-family: ${th('fontFamily')};
    font-size: ${th('fontSizeBase')};
    line-height: ${th('lineHeightBase')};
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`

Normalize.defaultProps = {
  __scTheme: theme,
}

export default Normalize
