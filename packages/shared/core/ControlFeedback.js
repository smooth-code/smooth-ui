import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { css } from './styled-engine'
import { th } from './utils/system'
import createComponent from './utils/createComponent'

const ControlFeedback = createComponent(() => ({
  name: 'control-feedback',
  render: ({ Component, className, valid, ...props }) => (
    <Component
      className={classNames(
        className,
        {
          'sui-is-valid': valid === true,
          'sui-is-invalid': valid === false,
        },
        className,
      )}
      {...props}
    />
  ),
  style: css`
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;

    &.sui-is-valid {
      color: ${th('success')};
    }

    &.sui-is-invalid {
      color: ${th('danger')};
    }
  `,
  propTypes: {
    children: PropTypes.node,
    valid: PropTypes.bool.isRequired,
  },
}))

export default ControlFeedback
