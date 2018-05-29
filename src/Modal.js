/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import * as defaultTheme from './theme/defaultTheme'
import { th } from './utils'
import Transition from './Transition'

class ModalComponent extends React.Component {
  constructor(props) {
    super(props)
    if (!this.container && typeof document !== 'undefined') {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
    }
  }

  handleKeyup = ({ keyCode }) => {
    if (keyCode === 27 /* Escape */) {
      this.props.onClose()
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.container)
    document.removeEventListener('keyup', this.handleKeyup)
  }

  componentDidUpdate() {
    if (this.props.opened) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keyup', this.handleKeyup)
    } else {
      document.body.style.overflow = null
      document.removeEventListener('keyup', this.handleKeyup)
    }
  }

  render() {
    const { className, theme, opened, onClose, children, ...props } = this.props
    if (!this.container) return null
    return createPortal(
      <Transition ms={theme.modalTransitionDuration} toggle={this.props.opened}>
        {({ entering, exiting }) => (
          <div
            role="dialog"
            tabIndex="-1"
            className={classNames(
              'sui-modal',
              {
                'sui-modal-opened': opened || exiting || entering,
                'sui-modal-fade-in': entering,
                'sui-modal-fade-out': exiting,
              },
              className,
            )}
            {...props}
          >
            <div className="sui-modal-backdrop" onClick={onClose} />
            {children}
          </div>
        )}
      </Transition>,
      this.container,
    )
  }
}

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
  transition: opacity ${th('modalTransitionDuration')}ms;

  &.sui-modal-opened {
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &.sui-modal-fade-in {
    opacity: 1;
  }

  &.sui-modal-fade-out {
    opacity: 0;
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
  opened: PropTypes.bool,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Modal
