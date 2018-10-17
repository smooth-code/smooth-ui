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

const css = (parts, ...args) => {
  if (
    typeof parts === 'function' ||
    args.some(arg => typeof arg === 'function')
  ) {
    return props => {
      if (!props) {
        throw new Error('Wrong usage of `css` function')
      }

      const transform = arg => {
        if (typeof arg === 'function') {
          return transform(arg(props))
        }

        if (Array.isArray(arg)) {
          return arg.map(transform)
        }

        return arg
      }

      const transformedArgs = transform(args)
      const transformedParts =
        typeof parts === 'function' ? transform(parts) : parts
      return emotionCss(transformedParts, ...transformedArgs)
    }
  }

  return emotionCss(parts, ...args)
}

function patchStyledComponent(StyledComponent) {
  const { withComponent } = StyledComponent
  StyledComponent.withComponent = component => {
    // eslint-disable-next-line no-underscore-dangle
    const BaseComponent = StyledComponent.__emotion_base
    return Object.assign(
      patchStyledComponent(
        withComponent(props => <BaseComponent as={component} {...props} />),
      ),
      StyledComponent,
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
  return component => wrapCreateStyledComponent(styled(component))
}

const styled = wrapStyled(emotionStyled)

export default styled
export { css, injectGlobal, ThemeProvider, keyframes, cx }
