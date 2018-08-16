import React from 'react'
import createComponent from './internal/createComponent'

const FormCheck = createComponent(({ css, classNames, PropTypes }) => ({
  name: 'form-check',
  render: ({ Component, className, inline, ...props }) => (
    <Component
      className={classNames(className, { 'sui-form-check-inline': inline })}
      {...props}
    />
  ),
  style: css`
    display: flex;
    align-items: center;

    &.sui-form-check-inline {
      display: inline-flex;
      margin-right: 0.75rem;
    }
  `,
  propTypes: {
    children: PropTypes.node,
    inline: PropTypes.bool,
  },
}))

export default FormCheck
