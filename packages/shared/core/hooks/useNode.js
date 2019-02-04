import { useRef, useEffect } from 'react'

export default function useNode(
  type = 'sui-portal',
  container = document.body,
) {
  const ref = useRef()
  useEffect(() => {
    ref.node = document.createElement(type)
    container.appendChild(ref.node)
    return () => container.removeChild(ref.node)
  }, [type])
  return ref.node
}
