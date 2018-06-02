/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import Transition from './Transition'
import * as defaultTheme from './theme/defaultTheme'
import { th } from './utils'

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

  setupKeyHandling() {
    if (this.props.opened) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keyup', this.handleKeyup)
    } else {
      document.body.style.overflow = null
      document.removeEventListener('keyup', this.handleKeyup)
    }
  }

  componentDidMount() {
    this.setupKeyHandling()
  }

  componentDidUpdate() {
    this.setupKeyHandling()
  }

  render() {
    const { className, theme, opened, onClose, children, ...props } = this.props
    if (!this.container) return null
    return createPortal(
      <Transition
        timeout={theme.modalTransitionDuration}
        in={this.props.opened}
      >
        {transitionState => (
          <div
            role="dialog"
            tabIndex="-1"
            className={classNames(
              'sui-modal',
              {
                'sui-modal-opened': opened || transitionState === 'exiting',
                [`sui-modal-transition-${transitionState}`]: transitionState,
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
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  transition: opacity ${th('modalTransitionDuration')}ms ease-in-out;

  &.sui-modal-opened {
    visibility: visible;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &.sui-modal-transition-entering {
    opacity: 1;
  }

  &.sui-modal-transition-entered {
    opacity: 1;
  }

  &.sui-modal-transition-exited {
    opacity: 0;
  }

  &.sui-modal-transition-exiting {
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
