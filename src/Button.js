import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import createComponent from './utils/createComponent'

const Button = createComponent(() => ({
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
    ${th('transitionBase')};

    /* When used as link */
    text-decoration: none;

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

    ${th('btnVariants', variants =>
      variants.map(
        variant => css`
          &.sui-button-${variant} {
            ${mixin('btnVariant', variant)};
          }
        `,
      ),
    )};
  `,
  propTypes: {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
    variant: PropTypes.string,
  },
  defaultProps: {
    variant: 'primary',
  },
}))

export default Button
