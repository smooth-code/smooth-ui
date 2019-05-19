import { style, themeGetter, compose } from '../style'
import { px, percent } from '../unit'

export const getColor = themeGetter({ themeKey: 'colors' })

export const getPx = themeGetter({ transform: px })

export const getPercent = themeGetter({ transform: percent })

export const getRadius = themeGetter({
  themeKey: 'radii',
  transform: px,
})

export const opacity = style({
  prop: 'opacity',
})

export const overflow = style({
  prop: 'overflow',
})

export const basics = compose(
  opacity,
  overflow,
)
