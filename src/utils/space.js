import { mediaMinWidth, getBreakpointMin } from './breakpoints'
import { num, negative, is, string, obj, merge } from './misc'
import { px, lazyTh, stylePropType } from './system'

const properties = {
  m: 'margin',
  p: 'padding',
}

const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
}

const spaceKeys = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
]

const getProperties = key => {
  const [a, b] = key.split('')
  const property = properties[a]
  const direction = directions[b] || ''
  return Array.isArray(direction)
    ? direction.map(dir => property + dir)
    : [property + direction]
}

const getValue = variants => n => {
  if (!num(n)) {
    return variants[n] || n
  }
  const abs = Math.abs(n)
  const neg = negative(n)
  const value = variants[abs] || abs
  if (!num(value)) {
    return neg ? `-${value}` : value
  }
  return px(value * (neg ? -1 : 1))
}

const space = props => {
  const keys = Object.keys(props)
    .filter(key => spaceKeys.includes(key))
    .sort()
  if (!keys.length) return null

  const variants = lazyTh('spaces')(props) || {}
  const getStyle = getValue(variants)

  return keys
    .map(key => {
      const value = props[key]
      const properties = getProperties(key)

      const styleFromValue = n =>
        is(n)
          ? properties.reduce(
              (a, prop) => ({
                ...a,
                [prop]: getStyle(n),
              }),
              {},
            )
          : null

      if (string(value) || num(value)) {
        return styleFromValue(value)
      }

      if (obj(value)) {
        return Object.keys(value)
          .map(breakpoint => {
            const style = styleFromValue(value[breakpoint])
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
    })
    .reduce(merge, {})
}

space.propTypes = spaceKeys.reduce((obj, key) => {
  obj[key] = stylePropType
  return obj
}, {})

space.meta = { props: spaceKeys }

export default space
