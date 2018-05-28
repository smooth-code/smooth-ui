import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import * as defaultTheme from './theme/defaultTheme'
import { mixin } from './utils'

const ModalHeaderComponent = ({ className, theme, ...props }) => (
  <div className={classNames('sui-modal-header', className)} {...props} />
)

const ModalHeader = styled(ModalHeaderComponent)`
  ${mixin('base')};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
}

ModalHeader.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default ModalHeader
