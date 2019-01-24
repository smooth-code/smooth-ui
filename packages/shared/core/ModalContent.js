import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th } from './utils/system'
import { up } from './utils/breakpoints'
import ModalContext from './ModalContext'
import createComponent from './utils/createComponent'
import { wrapEvent } from './utils/dom'

const stopPropagation = event => event.stopPropagation()

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
  style: () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    /* Ensure "ModalContent" extends the full width of the parent "ModalDialog" */
    width: 100%;
    /* Counteract the pointer-events: none; in the ModalDialog */
    pointer-events: auto;
    background-color: ${th('modalContentBg')};
    background-clip: padding-box;
    border: ${th('modalContentBorderWidth')} solid
      ${th('modalContentBorderColor')};
    border-radius: ${th('modalContentBorderRadius')};
    ${th('modalContentBoxShadowXs')};
    /* Remove focus outline from opened modal */
    outline: 0;

    ${up(
      'sm',
      css`
        ${th('modalContentBoxShadowSmUp')};
      `,
    )};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalContent
