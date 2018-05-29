import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { mixin, th } from './utils'

const ModalBodyComponent = ({
  className,
  component: Component = 'div',
  theme,
  ...props
}) => (
  <Component className={classNames('sui-modal-body', className)} {...props} />
)

const ModalBodyRefComponent = handleRef(ModalBodyComponent)

const ModalBody = styled(ModalBodyRefComponent)`
  ${mixin('base')};
  position: relative;
  /* Enable "flex-grow: 1" so that the body take up as much space as possible */
  /* when should there be a fixed height on ModalDialog. */
  flex: 1 1 auto;
  padding: ${th('modalInnerPadding')};
`

ModalBody.propTypes = {
  children: PropTypes.node,
}

ModalBody.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(ModalBody, ModalBodyRefComponent)

/** @component */
export default ModalBody
