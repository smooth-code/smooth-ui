import { useState, useEffect, useRef, useCallback } from 'react'

export default function useToggle(defaultToggled = false, onToggle) {
  const onToggleRef = useRef()
  onToggleRef.current = onToggle

  const [toggled, setToggled] = useState(defaultToggled)
  const toggle = useCallback(
    toggled =>
      setToggled(
        toggled === undefined ? previousToggled => !previousToggled : toggled,
      ),
    [setToggled],
  )

  useEffect(() => {
    if (onToggleRef.current) {
      onToggleRef.current(toggled)
    }
  }, [onToggleRef, toggled])

  return [toggled, toggle]
}
