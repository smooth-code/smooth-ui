import { modularScale } from 'polished'

export const SCALES = ['xs', 'sm', 'base', 'lg', 'xl']

export function scale(base, baseGetter, ratio) {
  return {
    xs: p => modularScale(-2, baseGetter(p), ratio),
    sm: p => modularScale(-1, baseGetter(p), ratio),
    base,
    lg: p => modularScale(1, baseGetter(p), ratio),
    xl: p => modularScale(2, baseGetter(p), ratio),
  }
}
