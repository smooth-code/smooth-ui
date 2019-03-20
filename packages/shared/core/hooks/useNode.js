import { useState, useEffect } from 'react'

export default function useNode(type) {
  const [node, setNode] = useState(null)
  useEffect(() => {
    const node = document.createElement(type)
    document.body.appendChild(node)
    setNode(node)
    return () => document.body.removeChild(node)
  }, [type])
  return node
}
