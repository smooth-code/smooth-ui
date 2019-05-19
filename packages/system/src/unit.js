import { num, negative } from './util'

export const unit = unit => value =>
  num(value) && value !== 0 ? `${value}${unit}` : value
export const px = unit('px')
export const percent = n => (n > 0 && n < 1 ? `${n * 100}%` : px(n))

const DEFAULT_SPACE = [0, 4, 8, 16, 24, 48, 96, 144, 192, 240]

export function transformSpace(
  transformedValue,
  { rawValue, variants = DEFAULT_SPACE },
) {
  if (!num(rawValue)) {
    return variants[rawValue] || rawValue
  }
  const abs = Math.abs(rawValue)
  const neg = negative(rawValue)
  const value = variants[abs] || abs
  if (!num(value)) {
    return neg ? `-${value}` : value
  }
  return value * (neg ? -1 : 1)
}
