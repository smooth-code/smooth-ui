import React from 'react'
import createComponent from './internal/createComponent'

const ControlFeedback = createComponent(
  ({ css, classNames, th, PropTypes }) => ({
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
  }),
)

export default ControlFeedback
