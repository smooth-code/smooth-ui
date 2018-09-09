import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import createComponent from './utils/createComponent'

const Input = createComponent(() => ({
  name: 'input',
  defaultComponent: 'input',
  render: ({ Component, className, control, size, valid, ...props }) => (
    <Component
      {...props}
      className={classNames(className, {
        'sui-control': control,
        'sui-is-valid': valid === true,
        'sui-is-invalid': valid === false,
        [`sui-input-${size}`]: size,
      })}
    />
  ),
  style: css`
    display: inline-block;
    border-width: ${th('inputBorderWidth')};
    border-color: ${th('inputBorderColor')};
    border-style: solid;
    border-radius: ${th('borderRadius')};
    padding: ${th('inputPaddingY')} ${th('inputPaddingX')};
    font-size: ${th('fontSizeBase')};
    line-height: ${th('inputLineHeight')};
    color: ${th('inputTextColor')};
    ${th('transitionBase')};
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
        box-shadow: ${mixin('controlFocusBoxShadow', 'primary')};
      }

      &.sui-is-valid {
        border-color: ${th('success')};

        &:focus {
          border-color: ${th('success')};
          box-shadow: ${mixin('controlFocusBoxShadow', 'success')};
        }
      }

      &.sui-is-invalid {
        border-color: ${th('danger')};

        &:focus {
          border-color: ${th('danger')};
          box-shadow: ${mixin('controlFocusBoxShadow', 'danger')};
        }
      }
    }
  `,
  propTypes: {
    control: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
    valid: PropTypes.bool,
  },
}))

export default Input
