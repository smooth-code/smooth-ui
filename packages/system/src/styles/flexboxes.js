import { style, compose } from '../style'
import { percent } from '../unit'
import { display } from './basics'

export const alignItems = style({
  prop: 'alignItems',
})

export const alignContent = style({
  prop: 'alignContent',
})

export const justifyContent = style({
  prop: 'justifyContent',
})

export const justifyItems = style({
  prop: 'justifyItems',
})

export const flexWrap = style({
  prop: 'flexWrap',
})

export const flexBasis = style({
  prop: 'flexBasis',
  transform: percent,
})

export const flexDirection = style({
  prop: 'flexDirection',
})

export const flex = style({
  prop: 'flex',
})

export const justifySelf = style({
  prop: 'justifySelf',
})

export const alignSelf = style({
  prop: 'alignSelf',
})

export const order = style({
  prop: 'order',
})

export const flexboxes = compose(
  display,
  alignItems,
  alignContent,
  justifyContent,
  justifyItems,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
)
