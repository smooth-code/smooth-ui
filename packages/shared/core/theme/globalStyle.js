import { normalize } from 'polished'
import * as defaultTheme from '../theme'
import { th } from '../utils/system'

const globalStyle = (customTheme = defaultTheme) => `
  ${normalize()};

  html,
  body {
    font-family: ${th('fontFamily')({ theme: customTheme })};
    font-size: ${th('fontSizeBase')({ theme: customTheme })};
    line-height: ${th('lineHeightBase')({ theme: customTheme })};
  }

  * {
    box-sizing: border-box;
  }
`

export default globalStyle
