import { useEffect } from 'react'

export default function useSetAttribute(elementRef, attribute, value) {
  useEffect(() => {
    if (!elementRef.current) return
    elementRef.current.setAttribute(attribute, value)
  }, [elementRef, attribute, value])
}
