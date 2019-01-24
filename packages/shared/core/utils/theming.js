import { get, cascade, is } from './misc'

export const getTheme = ({ theme = {} }) => theme

export const thd = (name, defaultValue, transform) => {
  const getFromProps = p => {
    const value = cascade(p => get(getTheme(p), name), p)
    if (value === undefined) {
      return cascade(defaultValue, p)
    }
    if (transform) {
      return transform(value)
    }
    return value
  }

  getFromProps.default = defaultValue

  return getFromProps
}

export const th = (name, transform) => p => {
  const value = cascade(p => get(getTheme(p), name), p)
  if (!is(value)) {
    throw new Error(`${name} not found in theme`)
  }
  if (transform) {
    return transform(value)
  }
  return value
}

export const mixin = (name, defaultFn) => {
  const mixinFn = (...args) => p => {
    const fn = get(getTheme(p), name) || defaultFn
    return fn(...args)(p)
  }
  mixinFn.default = defaultFn
  return mixinFn
}

export function definitionsToTheme(values) {
  const theme = {}
  const themingKeys = Object.keys(values)

  for (let i = 0; i < themingKeys.length; i++) {
    const key = themingKeys[i]
    const value = values[key]
    theme[key] = value && value.default !== undefined ? value.default : value
  }
  return theme
}
