import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import defaultTheme from './style/defaultTheme'

const ControlFeedbackComponent = ({ className, valid, ...props }) => (
  <div
    className={classNames(
      'sui-control-feedback',
      {
        'sui-is-valid': valid === true,
        'sui-is-invalid': valid === false,
      },
      className,
    )}
    {...props}
  />
)

const ControlFeedback = styled(ControlFeedbackComponent)`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;

  &.sui-is-valid {
    color: ${props => props.theme.colors.success};
  }

  &.sui-is-invalid {
    color: ${props => props.theme.colors.danger};
  }
`

ControlFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  valid: PropTypes.bool.isRequired,
}

ControlFeedback.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default ControlFeedback
