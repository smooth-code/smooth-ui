/* eslint-disable no-unused-expressions */
import React from 'react'
import { transparentize } from 'polished'
import { ThemeProvider } from 'emotion-theming'
import { theme, th, injectGlobal, globalStyle } from '@smooth-ui/core-sc'

const fromTheme = value => th(value)({ theme })

injectGlobal`
  ${globalStyle()}

  .sui-row + .sui-row {
    margin-top: 1rem;
  }

  .sui-col {
    border: 1px solid ${fromTheme('primary')};
    background-color: ${transparentize(0.6, fromTheme('primary'))};
    padding-top: .75rem;
    padding-bottom: .75rem;
  }

  .example-row-flex-cols .sui-row {
    min-height: 10rem;
    background-color: ${transparentize(0.7, fromTheme('primary'))};
  }
`

const Wrapper = ({ children }) => (
  <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>
)

export default Wrapper
