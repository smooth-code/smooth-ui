import { useMemo } from 'react'

export default function useRandomId(prefix) {
  return useMemo(
    () =>
      `${prefix ? `${prefix}-` : ''}${Math.random()
        .toString(36)
        .substring(7)}`,
    [prefix],
  )
}
