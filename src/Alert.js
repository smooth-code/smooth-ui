import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { th, mixin } from './utils/system'
import createComponent from './utils/createComponent'

const Alert = createComponent(() => ({
  name: 'alert',
  render: ({ Component, className, variant, ...props }) => (
    <Component
      {...props}
      className={classNames(className, {
        [`sui-alert-${variant}`]: variant,
      })}
    />
  ),
  style: p => ({
    position: 'relative',
    padding: `${th('alertPaddingY')(p)} ${th('alertPaddingX')(p)}`,
    marginBottom: th('alertMarginBottom')(p),
    border: '1px solid transparent',
    borderRadius: th('borderRadius')(p),
    ...th('alertVariants', variants =>
      variants.reduce((obj, variant) => {
        obj[`&.sui-alert-${variant}`] = mixin('alertVariant', variant)(p)
        return obj
      }, {}),
    )(p),
  }),
  propTypes: {
    children: PropTypes.node,
    variant: PropTypes.string,
  },
  defaultProps: {
    variant: 'primary',
  },
}))

export default Alert
