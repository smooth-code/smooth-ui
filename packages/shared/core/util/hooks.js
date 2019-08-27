import React from 'react'

export function useRandomId(prefix) {
  return React.useMemo(
    () =>
      `${prefix ? `${prefix}-` : ''}${Math.random()
        .toString(36)
        .substring(7)}`,
    [prefix],
  )
}
