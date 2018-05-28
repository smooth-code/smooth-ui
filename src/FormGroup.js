import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { mixin } from './utils'

const FormGroupComponent = ({
  component: Component = 'div',
  className,
  theme,
  ...props
}) => (
  <Component className={classNames('sui-form-group', className)} {...props} />
)

const FormGroupRefComponent = handleRef(FormGroupComponent)

const FormGroup = styled(FormGroupRefComponent)`
  ${mixin('base')};
  margin-bottom: 1rem;
`

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

FormGroup.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(FormGroup, FormGroupRefComponent)

/** @component */
export default FormGroup
