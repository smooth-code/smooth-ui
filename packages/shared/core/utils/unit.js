import { num } from './misc'

export const unit = unit => value => (num(value) ? `${value}${unit}` : value)

export const px = unit('px')

export const calc = (value, fn) => {
  const [, num, unit] = String(value).match(/([\d.]+)\s*(.*)/)
  return `${fn(Number(num))}${unit || 'px'}`
}
