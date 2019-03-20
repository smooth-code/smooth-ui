import { useState, useCallback } from 'react'

export default function useAsyncRef(defaultValue, forwardedRef) {
  const [ref, setRef] = useState({ current: defaultValue })
  const handleRef = useCallback(
    current => {
      setRef({ current })
      if (typeof forwardedRef === 'function') {
        forwardedRef(current)
      } else if (forwardedRef) {
        forwardedRef.current = current
      }
    },
    [setRef, forwardedRef],
  )
  return [ref, handleRef]
}
