/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import FocusLock from 'react-focus-lock'
import { css, withTheme } from './styled-engine'
import { th, mixin } from './utils/system'
import Transition from './Transition'
import Portal from './Portal'
import ModalContext from './ModalContext'
import createComponent from './utils/createComponent'
import { wrapEvent } from './utils/dom'

const createAriaHider = dialogNode => {
  const originalValues = []
  const rootNodes = []

  Array.prototype.forEach.call(document.querySelectorAll('body > *'), node => {
    if (node === dialogNode.parentNode) {
      return
    }
    const attr = node.getAttribute('aria-hidden')
    const alreadyHidden = attr !== null && attr !== 'false'
    if (alreadyHidden) {
      return
    }
    originalValues.push(attr)
    rootNodes.push(node)
    node.setAttribute('aria-hidden', 'true')
  })

  return () => {
    rootNodes.forEach((node, index) => {
      const originalValue = originalValues[index]
      if (originalValue === null) {
        node.removeAttribute('aria-hidden')
      } else {
        node.setAttribute('aria-hidden', originalValue)
      }
    })
  }
}

const cx = (...classNames) => classNames.filter(Boolean).join(' ')

class ModalComponent extends React.Component {
  contentRef = React.createRef()

  trap = null

  disposeAriaHider = null

  handleDialogRef = dialogNode => {
    if (dialogNode) {
      this.disposeAriaHider = createAriaHider(dialogNode)
    } else {
      this.disposeAriaHider()
    }
  }

  onFocusLockActivation = () => {
    const { initialFocusRef } = this.props
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus()
    }
  }

  render() {
    const {
      className,
      forwardedRef,
      forwardedAs,
      theme,
      opened,
      onClose,
      children,
      persistent,
      onClick,
      onKeyDown,
      initialFocusRef,
      ...props
    } = this.props
    return (
      <Transition
        timeout={theme ? theme.modalTransitionDuration : 300}
        in={opened}
      >
        {status => {
          if (status === 'exited') return null
          return (
            <Portal>
              <FocusLock returnFocus onActivation={this.onFocusLockActivation}>
                <div
                  className={cx(
                    'sui-modal',
                    `sui-modal-transition-${status}`,
                    className,
                  )}
                  ref={this.handleDialogRef}
                  onClick={wrapEvent(onClick, event => {
                    event.stopPropagation()
                    onClose()
                  })}
                  onKeyDown={wrapEvent(onKeyDown, event => {
                    if (event.key === 'Escape') {
                      event.stopPropagation()
                      onClose()
                    }
                  })}
                  {...props}
                >
                  <ModalContext.Provider
                    value={{ contentRef: this.contentRef, onClose }}
                  >
                    {children}
                  </ModalContext.Provider>
                </div>
              </FocusLock>
            </Portal>
          )
        }}
      </Transition>
    )
  }
}

const ModalComponentWithTheme = withTheme(ModalComponent)

const Modal = createComponent(() => ({
  name: 'modal',
  InnerComponent: ModalComponentWithTheme,
  style: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${th('zIndexModal')};
    visibility: visible;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0;
    outline: 0;
    background-color: ${th('modalBackdropBg')};

    ${mixin(
      'transition',
      css`opacity ${th('modalTransitionDuration')}ms ease-in-out`,
    )};

    &.sui-modal-transition-entering {
      opacity: 0;
    }

    &.sui-modal-transition-entered {
      opacity: 1;
    }

    &.sui-modal-transition-exiting {
      opacity: 0;
    }
  `,
  propTypes: {
    children: PropTypes.node,
    opened: PropTypes.bool,
    onClose: PropTypes.func,
    initialFocusRef: PropTypes.object,
  },
  defaultProps: {
    persistent: true,
  },
}))

export default Modal
