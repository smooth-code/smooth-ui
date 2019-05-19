import { flat } from './util'

export function cx(styles) {
  return theme => {
    const p = { theme }

    function parseStyle(style) {
      if (typeof style === 'function') {
        return style(p)
      }

      return style
    }

    if (Array.isArray(styles)) {
      return flat(styles).map(parseStyle)
    }

    return parseStyle(styles)
  }
}
