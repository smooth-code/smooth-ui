import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { css } from 'styled-components'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { th, mixin } from './utils'

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

const ButtonComponent = ({
  className,
  component: Component = 'button',
  size,
  theme,
  variant,
  ...props
}) => (
  <Component
    {...props}
    className={classNames(
      'sui-button',
      {
        [`sui-button-${size}`]: size,
        [`sui-button-${variant}`]: variant,
      },
      className,
    )}
  />
)

const ButtonRefComponent = handleRef(ButtonComponent)

const Button = styled(ButtonRefComponent)`
  ${mixin('base')};
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
`

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  variant: PropTypes.oneOf(variants),
}

Button.defaultProps = {
  variant: 'primary',
  theme: defaultTheme,
}

setWithComponent(Button, ButtonRefComponent)

/** @component */
export default Button
