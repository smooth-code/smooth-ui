import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import * as defaultTheme from './theme/defaultTheme'
import { mixin } from './utils'

const ModalFooterComponent = ({ className, theme, ...props }) => (
  <div className={classNames('sui-modal-footer', className)} {...props} />
)

const ModalFooter = styled(ModalFooterComponent)`
  ${mixin('base')};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e9ecef;

  /* Easily place margin between footer elements */
  > :not(:first-child) {
    margin-left: 0.25rem;
  }
  > :not(:last-child) {
    margin-right: 0.25rem;
  }
`

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
}

ModalFooter.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default ModalFooter
