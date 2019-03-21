import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import createComponent from './createComponent'
import Portal from './Portal'
import useRandomId from './hooks/useRandomId'
import usePopper, { placements } from './hooks/usePopper'
import useSetAttribute from './hooks/useSetAttribute'
import useAsyncRef from './hooks/useAsyncRef'
import useClickOutside from './hooks/useClickOutside'
import ParentElement from './ParentElement'

function PopoverComponent({
  children,
  visible,
  id: idProp,
  placement = 'auto',
  ref,
  Component,
  hideOnClickOutside = true,
  onHide,
  ...props
}) {
  const parentRef = useRef()
  const [popoverRef, handlePopoverRef] = useAsyncRef(undefined, ref)
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
        <Component
          ref={handlePopoverRef}
          id={id}
          aria-hidden={!visible}
          role="group"
          {...props}
        >
          {children}
        </Component>
      </Portal>
    </>
  )
}

const Popover = createComponent(() => ({
  name: 'popover',
  render: PopoverComponent,
  defaultComponent: 'div',
  style: () => css`
    &[aria-hidden='true'] {
      pointer-events: none;
      visibility: hidden !important;
    }
  `,
  propTypes: {
    children: PropTypes.node,
    onHide: PropTypes.func,
    placement: PropTypes.oneOf(placements),
    visible: PropTypes.bool,
  },
}))

export default Popover
