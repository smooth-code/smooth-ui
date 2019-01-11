import { num } from './util'

export const unit = unit => value => (num(value) ? `${value}${unit}` : value)
export const px = unit('px')
export const percent = n => (!num(n) || n > 1 ? px(n) : `${n * 100}%`)
