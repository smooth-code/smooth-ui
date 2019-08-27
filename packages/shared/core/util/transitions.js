import { th } from '@xstyled/system'
import { css } from './interop'

export const transitionEnabled = true

export const transition = value => p => {
  if (p.theme.transitionEnabled === false) return null
  return css`
    transition: ${th.transition(value)(p)};

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `(p)
}

export const safeTransition = value => p => {
  const transitionValue = transition(value)(p)
  if (!transitionValue) return null
  return css`
    ${transitionValue};
    transition-property: color, border-style, border-color, visibility,
      background, background-color, text-decoration, box-shadow, transform,
      opacity;
  `(p)
}
