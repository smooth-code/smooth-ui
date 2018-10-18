import React from 'react'
import PropTypes from 'prop-types'
import { th, mixin } from './utils/system'
import { css } from './styled-engine'
import ModalContext from './ModalContext'
import createComponent from './utils/createComponent'
import { wrapEvent } from './utils/dom'

const ModalCloseButton = createComponent(() => ({
  name: 'modal-close-button',
  defaultComponent: 'button',
  render: ({ Component, onClick, ref, ...props }) => (
    <ModalContext.Consumer>
      {modalContext => (
        <Component
          ref={ref}
          onClick={wrapEvent(onClick, () => {
            if (modalContext) {
              modalContext.onClose()
            }
          })}
          {...props}
        >
          <span aria-hidden="true">×</span>
        </Component>
      )}
    </ModalContext.Consumer>
  ),
  style: css`
    position: absolute;
    cursor: pointer;
    top: 0.2rem;
    right: 0.2rem;
    padding: 0.3rem 0.8rem;
    margin: 0;
    background-color: transparent;
    appearance: none;
    border: 0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    border-radius: ${th('borderRadius')};
    opacity: 0.5;
    ${th('transitionBase')};

    &:focus {
      opacity: 1;
      ${mixin('controlFocus')};
    }

    &:hover {
      opacity: 1;
    }
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalCloseButton
