import { normalize } from 'polished'
import { createGlobalStyle } from '@xstyled/x'
import { fonts } from './theme/common'

export const Normalize = createGlobalStyle`
  ${normalize()}

  html, body {
    font-family: ${fonts.base};
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }
`
