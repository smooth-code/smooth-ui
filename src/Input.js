import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import handleRef from './internal/handleRef'
import * as defaultTheme from './style/defaultTheme'
import { th, mixin } from './utils'

const InputComponent = ({
  className,
  control,
  size,
  theme,
  valid,
  ...props
}) => (
  <input
    {...props}
    className={classNames(
      'sui-input',
      {
        'sui-control': control,
        'sui-is-valid': valid === true,
        'sui-is-invalid': valid === false,
        [`sui-input-${size}`]: size,
      },
      className,
    )}
  />
)

const Input = styled(handleRef(InputComponent))`
  display: inline-block;
  border-width: ${th('inputBorderWidth')};
  border-color: ${th('inputBorderColor')};
  border-style: solid;
  border-radius: ${th('borderRadius')};
  padding: ${th('inputPaddingY')} ${th('inputPaddingX')};
  font-size: ${th('fontSizeBase')};
  line-height: ${th('inputLineHeight')};
  color: ${th('inputTextColor')};
  transition: ${th('transitionBase')};
  background-color: ${th('inputBgColor')};

  &[type='number'] {
    padding-right: 6px;
  }

  &::placeholder {
    color: ${th('inputPlaceholderText')};
  }

  &:focus {
    ${mixin('controlFocus')};
  }

  &[disabled] {
    background-color: ${th('inputDisabledBgColor')};
    color: ${th('inputDisabledText')};
  }

  &.sui-input-sm {
    padding: ${th('inputPaddingYSm')} ${th('inputPaddingXSm')};
    font-size: ${th('fontSizeSm')};
    border-radius: ${th('borderRadiusSm')};
  }

  &.sui-input-lg {
    padding: ${th('inputPaddingYLg')} ${th('inputPaddingXLg')};
    font-size: ${th('fontSizeLg')};
    border-radius: ${th('borderRadiusLg')};
  }

  &.sui-control {
    display: block;
    width: 100%;

    &:focus {
      border-color: ${th('controlFocusBorderColor')};
      box-shadow: ${props => props.theme.controlFocusBoxShadow('primary')};
    }

    &.sui-is-valid {
      border-color: ${th('success')};

      &:focus {
        border-color: ${th('success')};
        box-shadow: ${props => props.theme.controlFocusBoxShadow('success')};
      }
    }

    &.sui-is-invalid {
      border-color: ${th('danger')};

      &:focus {
        border-color: ${th('danger')};
        box-shadow: ${props => props.theme.controlFocusBoxShadow('danger')};
      }
    }
  }
`

Input.propTypes = {
  control: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  theme: PropTypes.object,
  valid: PropTypes.bool,
}

Input.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Input
