import { mix, getContrast } from 'polished'
import { th } from '@xstyled/system'

export const colorLevel = (color, level) => p => {
  const colorInterval = p.theme.colorInterval || 0.08
  const baseColor = level > 0 ? th.color('darker')(p) : th.color('lighter')(p)
  const absLevel = Math.abs(level)
  return mix(absLevel * colorInterval, baseColor, color)
}

const defaultColor = (name, defaultValue) => p => {
  const value = th.color(name)(p)
  if (value === name) return defaultValue
  return value
}

export const colorYik = color => p => {
  const darkValue = defaultColor('yik.dark', '#111')(p)
  const lightValue = defaultColor('yik.light', '#fff')(p)
  const colorValue = th.color(color)(p)
  const darkContrast = getContrast(colorValue, darkValue)
  const lightContrast = getContrast(colorValue, lightValue)
  return darkContrast < lightContrast + 4 ? lightValue : darkValue
}
