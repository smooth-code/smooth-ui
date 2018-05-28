import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { th, mixin } from './utils'

const ControlFeedbackComponent = ({
  component: Component = 'div',
  className,
  theme,
  valid,
  ...props
}) => (
  <Component
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

const ControlFeedbackRefComponent = handleRef(ControlFeedbackComponent)

const ControlFeedback = styled(ControlFeedbackRefComponent)`
  ${mixin('base')};
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;

  &.sui-is-valid {
    color: ${th('success')};
  }

  &.sui-is-invalid {
    color: ${th('danger')};
  }
`

ControlFeedback.propTypes = {
  children: PropTypes.node,
  valid: PropTypes.bool.isRequired,
}

ControlFeedback.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(ControlFeedback, ControlFeedbackRefComponent)

/** @component */
export default ControlFeedback
