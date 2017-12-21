import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FormGroupComponent = ({ className, control, label }) => (
  <div className={classNames('sui-form-group', className)}>
    <div className="sui-form-group-label">{label}</div>
    {control}
  </div>
)

const FormGroup = styled(FormGroupComponent)`
  .sui-form-group-label {
    margin-bottom: 0.5rem;
  }
`

FormGroup.propTypes = {
  control: PropTypes.node,
  label: PropTypes.node,
}

/** @component */
export default FormGroup
