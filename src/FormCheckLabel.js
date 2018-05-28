/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { th, mixin } from './utils'

const FormCheckLabelComponent = ({
  component: Component = 'label',
  className,
  theme,
  ...props
}) => (
  <Component
    className={classNames('sui-form-check-label', className)}
    {...props}
  />
)

const FormCheckLabelRefComponent = handleRef(FormCheckLabelComponent)

const FormCheckLabel = styled(FormCheckLabelRefComponent)`
  ${mixin('base')};
  padding-left: 0.25rem;

  [class*='disabled'] ~ & {
    color: ${th('inputDisabledText')};
  }
`

FormCheckLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

FormCheckLabel.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(FormCheckLabel, FormCheckLabelRefComponent)

/** @component */
export default FormCheckLabel
