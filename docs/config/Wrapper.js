/* eslint-disable no-unused-expressions */
import React from 'react'
import { transparentize } from 'polished'
import {
  theme,
  th,
  createGlobalStyle,
  Normalize,
  ThemeProvider,
} from '@smooth-ui/core-sc'

const GlobalStyle = createGlobalStyle`
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
      <Normalize />
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

export default Wrapper
