/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled, { css as emotionCss, injectGlobal } from 'react-emotion'
import {
  withTheme as emotionWithTheme,
  channel,
  contextTypes,
  ThemeProvider,
} from 'emotion-theming'

export { injectGlobal, ThemeProvider }

export const withTheme = Component => {
  const WithThemeComponent = emotionWithTheme(Component)

  // eslint-disable-next-line react/prefer-stateless-function
  class SafeWithTheme extends React.Component {
    static contextTypes = contextTypes

    render() {
      if (!this.context[channel]) return <Component {...this.props} />
      return <WithThemeComponent {...this.props} />
    }
  }

  return SafeWithTheme
}

export const css = (parts, ...args) => props => {
  if (!props) {
    throw new Error('Problem in css func')
  }

  const transformArg = arg => {
    if (typeof arg === 'function') {
      return transformArg(arg(props))
    }

    if (Array.isArray(arg)) {
      return arg.map(transformArg)
    }

    return arg
  }

  const mappedArgs = transformArg(args)

  return emotionCss(parts, ...mappedArgs)
}

export const patchStyledAPI = (StyledComponent, BaseComponent) => {
  // Patch extend
  Object.defineProperty(StyledComponent, 'extend', {
    get() {
      return (...args) => {
        const NewStyledComponent = styled(StyledComponent)`
          &&& {
            ${css(...args)};
          }
        `
        patchStyledAPI(NewStyledComponent, StyledComponent)
        return NewStyledComponent
      }
    },
  })

  // Patch withComponent
  const originalWithComponent = StyledComponent.withComponent.bind(
    StyledComponent,
  )
  StyledComponent.withComponent = component => {
    const NewStyledComponent = originalWithComponent(props => (
      <BaseComponent component={component} {...props} />
    ))

    patchStyledAPI(NewStyledComponent, BaseComponent)
    return NewStyledComponent
  }
}

export default styled
