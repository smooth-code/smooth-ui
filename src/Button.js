import React from 'react'
import PropTypes from 'prop-types'
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

const Button = createComponent(({ classNames, css, th, mixin }) => ({
  name: 'button',
  defaultComponent: 'button',
  render: ({ className, Component, size, variant, ...props }) => (
    <Component
      {...props}
      className={classNames(className, {
        [`sui-button-${size}`]: size,
        [`sui-button-${variant}`]: variant,
      })}
    />
  ),
  style: css`
    display: inline-block;
    padding: ${th('btnPaddingY')} ${th('btnPaddingX')};
    z-index: ${th('zIndexControl')};
    border-radius: ${th('borderRadius')};
    font-size: ${th('fontSizeBase')};
    line-height: ${th('lineHeightBase')};
    border-width: ${th('btnBorderWidth')};
    cursor: pointer;
    transition: ${th('transitionBase')};

    &.sui-button-sm {
      padding: ${th('btnPaddingYSm')} ${th('btnPaddingXSm')};
      font-size: ${th('fontSizeSm')};
      border-radius: ${th('borderRadiusSm')};
    }

    &.sui-button-lg {
      padding: ${th('btnPaddingYLg')} ${th('btnPaddingXLg')};
      font-size: ${th('fontSizeLg')};
      border-radius: ${th('borderRadiusLg')};
    }

    &:disabled {
      opacity: ${th('btnDisabledOpacity')};
    }

    ${variants.map(
      variant => css`
        &.sui-button-${variant} {
          ${mixin('btnVariant', variant)};
        }
      `,
    )};
  `,
  propTypes: {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
    variant: PropTypes.oneOf(variants),
  },
  defaultProps: {
    variant: 'primary',
  },
}))

export default Button
