import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { css } from './styled-engine'
import createComponent from './utils/createComponent'

const FormCheck = createComponent(() => ({
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
