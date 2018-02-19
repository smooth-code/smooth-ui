import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import handleRef from './internal/handleRef'
import * as defaultTheme from './style/defaultTheme'
import { th } from './utils'

const ButtonComponent = ({ className, size, ...props }) => (
  <button
    {...props}
    className={classNames(
      'sui-button',
      {
        [`sui-button-${size}`]: size,
      },
      className,
    )}
  />
)

const Button = styled(handleRef(ButtonComponent))`
  display: inline-block;
  padding: ${th('btnPaddingY')} ${th('btnPaddingX')};
  z-index: ${th('zIndexControl')};
  border-radius: ${th('borderRadius')};
  font-size: ${th('fontSizeBase')};
  line-height: ${th('lineHeightBase')};
  background-color: ${th('btnBackgroundColor')};
  color: ${th('white')};
  border-width: ${th('btnBorderWidth')};
  cursor: pointer;
  transition: ${th('transitionBase')};

  &:focus {
    ${th('controlFocus')};
  }

  &:not(:disabled):hover,
  &:not(:disabled):active {
    background-color: ${th('btnHoverBackgroundColor')};
  }

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
`

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']),
  disabled: PropTypes.bool,
  theme: PropTypes.object,
}

Button.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Button
