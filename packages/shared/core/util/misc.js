import { merge } from '@xstyled/util'

export function mergeClone(...args) {
  return args.reduce((result, obj) => merge(result, obj), {})
}
