import { useRef, useEffect, useMemo } from 'react'

export default function useClickOutside(ref, handler) {
  const isTouchRef = useRef()
  const handlerRef = useRef()
  handlerRef.current = handler
  const refs = useMemo(() => (Array.isArray(ref) ? ref : ref), [ref])

  useEffect(() => {
    function handleEvent(e) {
      if (e.type === 'touchend') {
        isTouchRef.current = true
      }
      if (e.type === 'click' && isTouchRef.current) return
      if (
        refs.every(
          ({ current: el }) => el && el !== e.target && !el.contains(e.target),
        )
      ) {
        handlerRef.current(e)
      }
    }

    document.addEventListener('touchend', handleEvent, true)
    document.addEventListener('click', handleEvent, true)

    return () => {
      document.removeEventListener('touchend', handleEvent, true)
      document.removeEventListener('click', handleEvent, true)
    }
  }, [refs])
}
