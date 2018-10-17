/* eslint-disable no-unused-expressions */
import React from 'react'
import { transparentize } from 'polished'
import { ThemeProvider } from 'emotion-theming'
import { theme, th, createGlobalStyle, globalStyle } from '@smooth-ui/core-sc'

const GlobalStyle = createGlobalStyle`
  ${globalStyle()}

  .sui-row + .sui-row {
    margin-top: 1rem;
  }

  .sui-col {
    border: 1px solid ${th('primary')};
    background-color: ${th('primary', color => transparentize(0.6, color))};
    padding-top: .75rem;
    padding-bottom: .75rem;
  }

  .example-row-flex-cols .sui-row {
    min-height: 10rem;
    background-color: ${th('primary', color => transparentize(0.7, color))};
  }
`

const Wrapper = ({ children }) => (
  <ThemeProvider theme={{ ...theme }}>
    <>
      <GlobalStyle theme={{ ...theme }} />
      {children}
    </>
  </ThemeProvider>
)

export default Wrapper
