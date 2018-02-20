import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FormGroupComponent = ({ className, theme, ...props }) => (
  <div className={classNames('sui-form-group', className)} {...props} />
)

const FormGroup = styled(FormGroupComponent)`
  margin-bottom: 1rem;
`

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

/** @component */
export default FormGroup
