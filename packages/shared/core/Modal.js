/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { css, withTheme } from './styled-engine'
import {
  transition,
  zIndexModal,
  modalBackdropBg,
  modalTransitionDuration,
} from './theming/index'
import createComponent from './createComponent'
import { wrapEvent } from './utils/dom'
import Transition from './Transition'
import Portal from './Portal'
import ModalContext from './ModalContext'

function createModalComponent() {
  const createAriaHider = dialogNode => {
    const originalValues = []
    const rootNodes = []

    Array.prototype.forEach.call(
      document.querySelectorAll('body > *'),
      node => {
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
      },
    )

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

  class ModalComponent extends Component {
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
        as,
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
      const timeout = modalTransitionDuration({ theme: theme || {} })
      return (
        <Transition timeout={timeout} in={opened}>
          {status => {
            if (status === 'exited') return null
            return (
              <Portal>
                <FocusLock
                  returnFocus
                  onActivation={this.onFocusLockActivation}
                >
                  <RemoveScroll forwardProps>
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
                  </RemoveScroll>
                </FocusLock>
              </Portal>
            )
          }}
        </Transition>
      )
    }
  }

  const ModalComponentWithTheme = withTheme(ModalComponent)
  return ModalComponentWithTheme
}

const Modal = createComponent(() => ({
  name: 'modal',
  InnerComponent: createModalComponent(),
  style: p => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${zIndexModal(p)};
    visibility: visible;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0;
    outline: 0;
    background-color: ${modalBackdropBg(p)};

    ${transition(`opacity ${modalTransitionDuration(p)}ms ease-in-out`)(p)};

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
