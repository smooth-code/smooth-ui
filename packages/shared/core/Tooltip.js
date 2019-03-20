import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { black, white, borderRadius } from './theming/index'
import { css } from './styled-engine'
import createComponent from './createComponent'
import Portal from './Portal'
import useRandomId from './hooks/useRandomId'
import usePopper from './hooks/usePopper'
import useAsyncRef from './hooks/useAsyncRef'
import useEventListener from './hooks/useEventListener'
import useSetAttribute from './hooks/useSetAttribute'
import ParentElement from './ParentElement'

function TooltipComponent({
  children,
  id: idProp,
  placement = 'top',
  forwardedRef,
  as: As = 'div',
  ...props
}) {
  const parentRef = useRef()
  const [visible, setVisible] = useState(false)
  const [tooltipRef, handleTooltipRef] = useAsyncRef(undefined, forwardedRef)
  const randomId = useRandomId('tooltip')
  const id = idProp || randomId

  const makeVisible = () => setVisible(true)
  const makeHidden = () => setVisible(false)

  usePopper(parentRef, tooltipRef, { placement })
  useSetAttribute(parentRef, 'aria-describedby', id)
  useEventListener(parentRef, 'focus', makeVisible)
  useEventListener(parentRef, 'blur', makeHidden)
  useEventListener(parentRef, 'mouseover', makeVisible)
  useEventListener(parentRef, 'mouseout', makeHidden)

  return (
    <>
      <ParentElement ref={parentRef} />
      <Portal>
        <As
          ref={handleTooltipRef}
          id={id}
          aria-hidden={!visible}
          role="tooltip"
          {...props}
        >
          {children}
        </As>
      </Portal>
    </>
  )
}

const Tooltip = createComponent(() => ({
  name: 'tooltip',
  defaultComponent: null,
  InnerComponent: TooltipComponent,
  style: p => css`
    &[aria-hidden='true'] {
      pointer-events: none;
      visibility: hidden !important;
    }

    margin: 0.5em;
    font-size: 0.875em;
    text-align: center;
    padding: 0.5em 0.75em;
    color: ${white(p)};
    background-color: ${black(p)};
    border-radius: ${borderRadius(p)};
  `,
  propTypes: {
    children: PropTypes.node,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  },
}))

export default Tooltip
