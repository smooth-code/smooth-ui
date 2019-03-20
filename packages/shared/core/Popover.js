import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import createComponent from './createComponent'
import Portal from './Portal'
import useRandomId from './hooks/useRandomId'
import usePopper from './hooks/usePopper'
import useSetAttribute from './hooks/useSetAttribute'
import useAsyncRef from './hooks/useAsyncRef'
import useClickOutside from './hooks/useClickOutside'
import ParentElement from './ParentElement'

function PopoverComponent({
  children,
  visible,
  id: idProp,
  placement = 'top',
  forwardedRef,
  as: As = 'div',
  hideOnClickOutside = true,
  onHide,
  ...props
}) {
  const parentRef = useRef()
  const [popoverRef, handlePopoverRef] = useAsyncRef(undefined, forwardedRef)
  const randomId = useRandomId('tooltip')
  const id = idProp || randomId

  usePopper(parentRef, popoverRef, { placement })
  useSetAttribute(parentRef, 'aria-haspopup', true)
  useSetAttribute(parentRef, 'aria-expanded', visible)
  useSetAttribute(parentRef, 'aria-controls', id)
  useClickOutside([parentRef, popoverRef], () => {
    if (onHide && hideOnClickOutside) onHide()
  })

  return (
    <>
      <ParentElement ref={parentRef} />
      <Portal>
        <As
          ref={handlePopoverRef}
          id={id}
          aria-hidden={!visible}
          role="group"
          {...props}
        >
          {children}
        </As>
      </Portal>
    </>
  )
}

const Popover = createComponent(() => ({
  name: 'popover',
  InnerComponent: PopoverComponent,
  style: () => css`
    &[aria-hidden='true'] {
      pointer-events: none;
      visibility: hidden !important;
    }
  `,
  propTypes: {
    children: PropTypes.node,
    onHide: PropTypes.func,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    visible: PropTypes.bool,
  },
}))

export default Popover
