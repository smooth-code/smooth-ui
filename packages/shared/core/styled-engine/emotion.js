import React from 'react'
import { css as emoCss, Global } from '@emotion/core'
import { withTheme } from 'emotion-theming'

export { default as styled } from '@emotion/styled'
export {
  keyframes,
  ClassNames,
  Global,
  jsx,
  withEmotionCache,
  CacheProvider,
  ThemeContext,
} from '@emotion/core'
export { ThemeProvider, withTheme } from 'emotion-theming'

const isInterpolation = func => {
  if (typeof func !== 'function') return false
  // eslint-disable-next-line no-underscore-dangle
  if (func.__emotion_styles) return false
  return true
}

export const css = (strings, ...args) => {
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
      return emoCss(strings, ...transformedArgs)
    }
  }

  return emoCss(strings, ...args)
}

export const createGlobalStyle = (...args) => {
  const GlobalStyle = props => {
    const cssResult = css(...args)
    const styles =
      typeof cssResult === 'function' ? cssResult(props) : cssResult
    return <Global styles={styles} />
  }

  return withTheme(GlobalStyle)
}
