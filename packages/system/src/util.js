import deepmerge from 'deepmerge' // < 1kb payload overhead when lodash/merge is > 3kb.

export const is = n => n !== undefined && n !== null
export const num = n => typeof n === 'number' && !Number.isNaN(n)
export const string = n => typeof n === 'string' && n !== ''
export const obj = n => typeof n === 'object' && n !== null
export const func = n => typeof n === 'function'
export const negative = n => num(n) && n < 0

export const get = (obj, path) =>
  String(path)
    .split('.')
    .reduce((a, b) => (a && is(a[b]) ? a[b] : undefined), obj)

export function merge(acc, item) {
  if (!is(item)) {
    return acc
  }

  // No need to clone deep, it's way faster.
  return deepmerge(acc, item, { clone: false })
}

export function flat(array) {
  const flattend = []
  function innerFlat(array) {
    const arrayLength = array.length
    for (let i = 0; i < arrayLength; i += 1) {
      const el = array[i]
      if (Array.isArray(el)) {
        innerFlat(el)
      } else {
        flattend.push(el)
      }
    }
  }

  innerFlat(array)
  return flattend
}
