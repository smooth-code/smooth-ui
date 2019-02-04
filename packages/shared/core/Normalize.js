import { normalize } from 'polished'
import { fontFamily, fontSizeBase, lineHeightBase } from './theming/index'
import { createGlobalStyle } from './styled-engine'

export const Normalize = createGlobalStyle`
  ${normalize()}
  html,
  body {
    font-family: ${fontFamily};
    font-size: ${fontSizeBase};
    line-height: ${lineHeightBase};
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`

export default Normalize
