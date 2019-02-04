import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import {
  borderRadius,
  transitionBase,
  baseFocus,
  primary,
} from './theming/index'
import { wrapEvent } from './utils/dom'
import createComponent from './createComponent'
import ModalContext from './ModalContext'

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
  style: p => css`
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
    border-radius: ${borderRadius(p)};
    opacity: 0.5;
    ${transitionBase(p)};

    &:focus {
      opacity: 1;
      ${baseFocus(primary(p))(p)};
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
