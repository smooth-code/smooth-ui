import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import {
  up,
  modalContentBg,
  modalContentBorderWidth,
  modalContentBorderColor,
  modalContentBorderRadius,
  modalContentBoxShadowXs,
  modalContentBoxShadowSmUp,
} from './theming/index'
import ModalContext from './ModalContext'
import createComponent from './createComponent'
import { wrapEvent, stopPropagation } from './utils/dom'

const ModalContent = createComponent(() => ({
  name: 'modal-content',
  render: ({ Component, ref, onClick, ...props }) => (
    <ModalContext.Consumer>
      {modalContext => (
        <Component
          tabIndex="-1"
          ref={node => {
            if (modalContext) modalContext.contentRef.current = node
            if (ref) ref(node)
          }}
          onClick={wrapEvent(onClick, stopPropagation)}
          {...props}
        />
      )}
    </ModalContext.Consumer>
  ),
  style: p => css`
    position: relative;
    display: flex;
    flex-direction: column;
    /* Ensure "ModalContent" extends the full width of the parent "ModalDialog" */
    width: 100%;
    /* Counteract the pointer-events: none; in the ModalDialog */
    pointer-events: auto;
    background-color: ${modalContentBg(p)};
    background-clip: padding-box;
    border-style: solid;
    border-width: ${modalContentBorderWidth(p)};
    border-color: ${modalContentBorderColor(p)};
    border-radius: ${modalContentBorderRadius(p)};
    ${modalContentBoxShadowXs(p)};
    /* Remove focus outline from opened modal */
    outline: 0;

    ${up('sm', modalContentBoxShadowSmUp(p))};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalContent
