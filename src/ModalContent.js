import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import * as defaultTheme from './theme/defaultTheme'
import { mixin } from './utils'

const ModalContentComponent = ({ className, theme, ...props }) => (
  <div className={classNames('sui-modal-content', className)} {...props} />
)

const ModalContent = styled(ModalContentComponent)`
  ${mixin('base')};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* Counteract the pointer-events: none; in the ModalDialog */
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  /* Remove focus outline from opened modal */
  outline: 0;
`

ModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
}

ModalContent.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default ModalContent
