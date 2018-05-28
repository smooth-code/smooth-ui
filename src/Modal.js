/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import * as defaultTheme from './theme/defaultTheme'
import { th } from './utils'

class Portal extends React.Component {
  constructor(props) {
    super(props)
    if (!this.container && typeof document !== 'undefined') {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.container)
  }

  render() {
    if (!this.container) return null
    return createPortal(this.props.children, this.container)
  }
}

const ModalComponent = ({
  className,
  theme,
  opened,
  onClose,
  children,
  ...props
}) => (
  <Portal>
    <div
      role="dialog"
      tabIndex="-1"
      className={classNames(
        'sui-modal',
        { 'sui-modal-opened': opened },
        className,
      )}
      {...props}
    >
      <div className="sui-modal-backdrop" onClick={onClose} />
      {children}
    </div>
  </Portal>
)

const Modal = styled(ModalComponent)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${th('zIndexModal')};
  display: none;
  overflow: hidden;
  outline: 0;
  opacity: 0;
  transition: opacity 1000ms;

  &.sui-modal-opened {
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 1;
  }

  .sui-modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${th('modalBackdropBg')};
    opacity: 0.5;
  }
`

Modal.propTypes = {
  children: PropTypes.node,
}

Modal.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Modal
