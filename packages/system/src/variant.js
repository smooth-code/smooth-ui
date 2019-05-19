import { getThemeValue, merge, warn, is } from './util'

export const variant = ({
  key = null,
  variants = {},
  prop = 'variant',
}) => props => {
  const themeVariants = is(key) ? getThemeValue(props, key) : null
  const computedVariants = merge(variants, themeVariants)
  const result = getThemeValue(props, props[prop], computedVariants)
  warn(is(result), `variant "${props[prop]}" not found`)
  return result
}
