import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { mixin, th } from './utils'

const ModalFooterComponent = ({
  className,
  component: Component = 'div',
  theme,
  ...props
}) => (
  <Component className={classNames('sui-modal-footer', className)} {...props} />
)

const ModalFooterRefComponent = handleRef(ModalFooterComponent)

const ModalFooter = styled(ModalFooterRefComponent)`
  ${mixin('base')};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${th('modalInnerPadding')};
  border-top: ${th('modalFooterBorderWidth')} solid
    ${th('modalFooterBorderColor')};

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
}

ModalFooter.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(ModalFooter, ModalFooterRefComponent)

/** @component */
export default ModalFooter
