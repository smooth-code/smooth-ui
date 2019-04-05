import { num, string } from './misc'

export const unit = unit => value => (num(value) ? `${value}${unit}` : value)
export const negative = value => {
  if (!value) return value
  if (num(value)) return -value
  if (string(value)) return `-${value}`
  const obj = {}
  const keys = Object.keys(value)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    obj[key] = negative(value[key])
  }
  return obj
}

export const px = unit('px')

export const calc = (value, fn) => {
  const [, num, unit] = String(value).match(/([\d.]+)\s*(.*)/)
  return `${fn(Number(num))}${unit || 'px'}`
}
