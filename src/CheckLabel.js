import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CheckLabelComponent = ({ className, control, label }) => (
  <div className={classNames('sui-check-label', className)}>
    {control}
    <span className="sui-check-label-label">{label}</span>
  </div>
)

const CheckLabel = styled(CheckLabelComponent)`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;

  .sui-check-label-label {
    padding-left: 0.25rem;
  }
`

CheckLabel.propTypes = {
  control: PropTypes.node,
  label: PropTypes.node,
  inline: PropTypes.bool,
}

/** @component */
export default CheckLabel
