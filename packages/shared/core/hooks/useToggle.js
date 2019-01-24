import { useState, useEffect, useRef } from 'react'

export function useToggle(defaultToggled = false, onToggle) {
  const ref = useRef()
  const [toggled, setToggled] = useState(defaultToggled)
  function toggle(toggled) {
    setToggled(
      toggled === undefined ? previousToggled => !previousToggled : toggled,
    )
  }
  useEffect(() => {
    if (!ref.mounted) {
      ref.mounted = true
    }
    if (onToggle) {
      onToggle(toggled)
    }
  }, [toggled])
  return [toggled, toggle]
}
