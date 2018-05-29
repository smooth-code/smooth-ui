import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { mixin, th } from './utils'

const ModalHeaderComponent = ({
  className,
  component: Component = 'div',
  theme,
  ...props
}) => (
  <Component className={classNames('sui-modal-header', className)} {...props} />
)

const ModalHeaderRefComponent = handleRef(ModalHeaderComponent)

const ModalHeader = styled(ModalHeaderComponent)`
  ${mixin('base')};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${th('modalInnerPadding')};
  border-bottom: ${th('modalHeaderBorderWidth')} solid
    ${th('modalHeaderBorderColor')};
  border-top-left-radius: ${th('modalContentBorderRadius')};
  border-top-right-radius: ${th('modalContentBorderRadius')};
`

ModalHeader.propTypes = {
  children: PropTypes.node,
}

ModalHeader.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(ModalHeader, ModalHeaderRefComponent)

/** @component */
export default ModalHeader
