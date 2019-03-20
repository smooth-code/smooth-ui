import { useRef, useEffect } from 'react'

export default function useEventListener(targetRef, event, listener) {
  const listenerRef = useRef()
  listenerRef.current = listener
  useEffect(() => {
    if (!targetRef.current) return undefined
    const target = targetRef.current
    function handleEvent(event) {
      return listenerRef.current(event)
    }
    target.addEventListener(event, handleEvent)
    return () => target.removeEventListener(event, handleEvent)
  }, [event, targetRef, listenerRef])
}
