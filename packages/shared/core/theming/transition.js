import { css } from '../styled-engine'
import { thd, mixin } from '../utils/index'

const safeTransitionAttrs = [
  'color',
  'border-style',
  'border-color',
  'visibility',
  'background',
  'background-color',
  'text-decoration',
  'box-shadow',
  'transform',
  'opacity',
]

export const transitionEnabled = thd('transitionEnabled', true)
export const transitionDuration = thd('transitionDuration', '.2s')
export const transitionEasingFunc = thd('transitionEasingFunc', 'ease-in-out')

export const transition = mixin('transition', value => p => {
  if (!transitionEnabled(p)) return null
  return css`
    transition: ${value};

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
})

export const transitionBase = thd('transitionBase', p =>
  transition(
    safeTransitionAttrs
      .map(
        attr => `${attr} ${transitionDuration(p)} ${transitionEasingFunc(p)}`,
      )
      .join(','),
  )(p),
)
