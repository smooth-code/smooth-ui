import { normalize } from 'polished'
import * as defaultTheme from '../theme'
import { th } from '../utils/system'

const globalStyle = (theme = defaultTheme) => `
  ${normalize()};

  html,
  body {
    font-family: ${th('fontFamily')({ theme })};
    font-size: ${th('fontSizeBase')({ theme })};
    line-height: ${th('lineHeightBase')({ theme })};
  }

  * {
    box-sizing: border-box;
  }
`

export default globalStyle
