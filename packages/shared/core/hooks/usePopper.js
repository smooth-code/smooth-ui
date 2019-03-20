import { useEffect } from 'react'
import PopperJs from 'popper.js'

export default function usePopper(
  containerRef,
  elementRef,
  { placement = 'top' } = {},
) {
  useEffect(() => {
    const container = containerRef.current
    const element = elementRef.current
    if (!container || !element) return undefined
    const popper = new PopperJs(container, element, {
      placement,
    })
    return () => popper.destroy()
  }, [containerRef, elementRef, placement])
}
