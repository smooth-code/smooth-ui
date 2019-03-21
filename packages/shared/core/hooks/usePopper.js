import { useEffect } from 'react'
import PopperJs from 'popper.js'

export default function usePopper(
  containerRef,
  elementRef,
  { placement = 'auto' } = {},
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

export const placements = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
]
