export const is = n => n !== undefined && n !== null
export const num = n => typeof n === 'number' && !Number.isNaN(n)
export const string = n => typeof n === 'string' && n !== ''
export const obj = n => typeof n === 'object' && n !== null
export const func = n => typeof n === 'function'
export const identity = n => n
export const negative = n => n < 0

export const get = (obj, ...paths) =>
  paths
    .join('.')
    .split('.')
    .reduce((a, b) => (a && is(a[b]) ? a[b] : undefined), obj)

export const cascade = (fn, ...args) => {
  if (!func(fn)) return fn
  const next = fn(...args)
  return cascade(next, ...args)
}

export const merge = (a, b) =>
  Object.assign(
    {},
    a,
    b,
    Object.keys(b || {}).reduce(
      (all, key) =>
        Object.assign(all, {
          [key]: obj(a[key]) ? merge(a[key], b[key]) : b[key],
        }),
      {},
    ),
  )

export const omit = (obj, fields) => {
  const shallowCopy = { ...obj }
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i]
    delete shallowCopy[key]
  }
  return shallowCopy
}

export const assign = (target, source) => {
  const keys = Object.keys(source || {})
  const totalKeys = keys.length
  for (let i = 0; i < totalKeys; i += 1) {
    const key = keys[i]
    target[key] = source[key]
  }
  return target
}
