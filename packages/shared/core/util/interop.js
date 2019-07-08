import { css as baseCss } from '@xstyled/x'

export function css(...args) {
  const result = baseCss(...args)
  if (typeof result === 'function') return result
  return () => result
}
