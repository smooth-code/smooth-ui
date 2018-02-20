/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as defaultTheme from './style/defaultTheme'
import { th } from './utils'

const FormCheckLabelComponent = ({ className, theme, ...props }) => (
  <label className={classNames('sui-form-check-label', className)} {...props} />
)

const FormCheckLabel = styled(FormCheckLabelComponent)`
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

/** @component */
export default FormCheckLabel
