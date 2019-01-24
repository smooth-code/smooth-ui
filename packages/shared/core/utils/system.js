import PropTypes from 'prop-types'
import { styled } from '../styled-engine'
import * as theme from '../theme'
import { is, num, get, cascade } from './misc'

export const gth = p => {
  if (!p) return null
  if (p.theme && p.theme.__smoothUI) return p.theme
  return theme
}

export const lazyTh = name => props => cascade(p => get(gth(p), name), props)

export const th = (name, transform) => props => {
  const result = lazyTh(name)(props)
  if (!is(result)) {
    throw new Error(`"${name}" not found in theme`)
  }
  return transform ? transform(result) : result
}

export const mixin = (name, ...args) => p => gth(p)[name](p)(...args)

export const prop = (name, themeFallback) => p =>
  p[name] === undefined ? th(themeFallback)(p) : p[name]

export const calc = (value, fn) => {
  const [, num, unit] = String(value).match(/([\d.]+)\s*(.*)/)
  return `${fn(Number(num))}${unit || 'px'}`
}

export const unit = unit => value => (num(value) ? `${value}${unit}` : value)
export const px = unit('px')

export const stylePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.object,
])

export function uiAs(Component, asComponent) {
  const StyledComponent = styled(Component)``
  StyledComponent.propTypes = { ...Component.propTypes }
  StyledComponent.defaultProps = {
    ...Component.defaultProps,
    uiAs: asComponent,
  }
  return StyledComponent
}
