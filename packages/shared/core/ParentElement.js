import React, { useRef, useEffect, useState, forwardRef } from 'react'

const ParentElement = forwardRef((props, ref) => {
  const [show, setShow] = useState(true)
  const divRef = useRef()
  useEffect(() => {
    ref.current = divRef.current.parentElement
    setShow(false)
  }, [divRef, ref])
  return show ? <div ref={divRef} /> : null
})

export default ParentElement
