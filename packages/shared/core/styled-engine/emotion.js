import React from 'react'
import { css as emotionCss, injectGlobal, keyframes, cx } from 'emotion'
import emotionStyled from 'react-emotion'
import {
  withTheme as emotionWithTheme,
  ThemeProvider,
  contextTypes,
  channel,
} from 'emotion-theming'

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

const isInterpolation = func => {
  if (typeof func !== 'function') return false
  // eslint-disable-next-line no-underscore-dangle
  if (func.__emotion_styles) return false
  return true
}

const css = (...args) => {
  if (args.some(arg => isInterpolation(arg))) {
    return props => {
      if (!props) {
        throw new Error('Wrong usage of `css` function')
      }

      const transform = arg => {
        if (isInterpolation(arg)) {
          return transform(arg(props))
        }

        if (Array.isArray(arg)) {
          return arg.map(transform)
        }

        return arg
      }

      const transformedArgs = transform(args)
      return emotionCss(...transformedArgs)
    }
  }

  return emotionCss(...args)
}

function patchStyledComponent(StyledComponent) {
  const { withComponent } = StyledComponent
  StyledComponent.withComponent = (component, options) => {
    // eslint-disable-next-line no-underscore-dangle
    const BaseComponent = StyledComponent.__emotion_base
    return patchStyledComponent(
      Object.assign(
        withComponent(
          props => <BaseComponent as={component} {...props} />,
          options,
        ),
        StyledComponent,
      ),
    )
  }

  return StyledComponent
}

function wrapCreateStyledComponent(createStyledComponent) {
  const wrappedCreateStyledComponent = (...args) => {
    const StyledComponent = createStyledComponent(...args)
    return patchStyledComponent(StyledComponent)
  }
  return wrappedCreateStyledComponent
}

function wrapStyled(styled) {
  return (component, options) =>
    wrapCreateStyledComponent(styled(component, options))
}

const styled = wrapStyled(emotionStyled)

export default styled
export { css, injectGlobal, ThemeProvider, keyframes, cx }
