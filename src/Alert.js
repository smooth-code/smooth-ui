import React from 'react'
import createComponent from './internal/createComponent'

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

const Alert = createComponent(({ th, mixin, css, classNames, PropTypes }) => ({
  name: 'alert',
  render: ({ Component, className, variant, ...props }) => (
    <Component
      {...props}
      className={classNames(className, {
        [`sui-alert-${variant}`]: variant,
      })}
    />
  ),
  style: css`
    position: relative;
    padding: ${th('alertPaddingY')} ${th('alertPaddingX')};
    margin-bottom: ${th('alertMarginBottom')};
    border: 1px solid transparent;
    border-radius: ${th('borderRadius')};

    ${variants.map(
      variant => css`
        &.sui-alert-${variant} {
          ${mixin('alertVariant', variant)};
        }
      `,
    )};
  `,
  propTypes: {
    children: PropTypes.node,
    variant: PropTypes.oneOf(variants).isRequired,
  },
}))

export default Alert
