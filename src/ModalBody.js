import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import * as defaultTheme from './theme/defaultTheme'
import { mixin } from './utils'

const ModalBodyComponent = ({ className, theme, ...props }) => (
  <div className={classNames('sui-modal-body', className)} {...props} />
)

const ModalBody = styled(ModalBodyComponent)`
  ${mixin('base')};
  position: relative;
  /* Enable "flex-grow: 1" so that the body take up as much space as possible */
  /* when should there be a fixed height on ModalDialog. */
  flex: 1 1 auto;
  padding: 1rem;
`

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
}

ModalBody.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default ModalBody
