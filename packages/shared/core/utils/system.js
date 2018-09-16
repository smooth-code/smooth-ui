import PropTypes from 'prop-types'
import { getBreakpointMin, mediaMinWidth } from './breakpoints'
import { is, num, string, obj, identity, get, cascade, merge } from './misc'

export const lazyTh = name => props => cascade(p => get(p.theme, name), props)

export const th = (name, transform) => props => {
  const result = lazyTh(name)(props)
  if (!is(result)) {
    throw new Error(`"${name}" not found in theme`)
  }
  return transform ? transform(result) : result
}

export const mixin = (name, ...args) => props =>
  props.theme[name](props)(...args)

export const prop = (name, themeFallback) => props =>
  props[name] === undefined ? th(themeFallback)(props) : props[name]

export const calc = (value, fn) => {
  const [, num, unit] = String(value).match(/([\d.]+)\s*(.*)/)
  return `${fn(Number(num))}${unit || 'px'}`
}

export const unit = unit => value => (num(value) ? `${value}${unit}` : value)
export const px = unit('px')

const styleFromValue = ({
  cssProperty,
  value,
  transform,
  variants: variantsKey,
  props,
}) => {
  if (variantsKey && is(value)) {
    // Try to extract from theme
    const variants = lazyTh(variantsKey)(props)
    if (variants) {
      const valueFromVariants = cascade(variants[value], props)
      if (is(valueFromVariants)) {
        value = valueFromVariants
      }
    }
  }
  if (string(value) || num(value)) {
    return { [cssProperty]: transform(value) }
  }
  return null
}

export const stylePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.object,
])

export function style({ prop, cssProperty, transform = identity, variants }) {
  const fn = props => {
    const value = props[prop]
    if (!is(value)) return null
    cssProperty = cssProperty || prop
    const style = styleFromValue({
      value,
      cssProperty,
      transform,
      variants,
      props,
    })
    if (style) return style
    if (obj(value)) {
      return Object.keys(value)
        .map(breakpoint => {
          const style = styleFromValue({
            cssProperty,
            value: value[breakpoint],
            transform,
            variants,
            props,
          })
          if (!style) return null
          const breakpointValue = getBreakpointMin(breakpoint, props)
          if (breakpointValue === null) return style
          return {
            [mediaMinWidth(breakpointValue)]: style,
          }
        })
        .reduce(merge, {})
    }
    return null
  }

  fn.propTypes = {
    [prop]: stylePropType,
  }

  fn.meta = { props: [prop] }

  return fn
}

export const composeStyles = (...funcs) => {
  const fn = props =>
    funcs
      .map(fn => fn(props))
      .filter(Boolean)
      .reduce(merge, {})

  fn.propTypes = funcs.map(fn => fn.propTypes).reduce(merge, {})
  return fn
}
