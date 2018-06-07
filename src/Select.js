import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import handleRef from './internal/handleRef'
import * as defaultTheme from './theme/defaultTheme'
import { th, mixin } from './utils'

const renderOption = option => {
  const { label, value } =
    typeof option === 'string' ? { label: option, value: option } : option
  return (
    <option key={value} value={value}>
      {label}
    </option>
  )
}

const SelectComponent = ({
  arrow,
  control,
  className,
  options,
  size,
  theme,
  valid,
  ...props
}) => (
  <div
    className={classNames(
      'sui-select',
      {
        'sui-control': control,
        'sui-is-valid': valid === true,
        'sui-is-invalid': valid === false,
        [`sui-select-${size}`]: size,
      },
      className,
    )}
  >
    {arrow && !props.multiple ? (
      <svg className="sui-select-arrow" viewBox="0 0 10 5">
        <g fill="none" fillRule="evenodd">
          <path d="M17 14H-7v-24h24" />
          <path fill="currentColor" opacity={0.5} d="M0 0l5 5 5-5" />
        </g>
      </svg>
    ) : null}
    <select {...props}>
      {options.map(
        node =>
          node.options ? (
            <optgroup key={node.label} label={node.label}>
              {node.options.map(renderOption)}
            </optgroup>
          ) : (
            renderOption(node)
          ),
      )}
    </select>
  </div>
)

const SelectRefComponent = handleRef(SelectComponent)

const Select = styled(SelectRefComponent)`
  ${mixin('base')};
  display: inline-block;
  position: relative;

  select {
    /* Disable appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 0;

    display: inline-block;
    border-width: ${th('inputBorderWidth')};
    border-color: ${th('inputBorderColor')};
    border-style: solid;
    border-radius: ${th('borderRadius')};
    padding: ${th('inputPaddingY')} ${th('inputPaddingX')};
    font-size: ${th('fontSizeBase')};
    line-height: ${th('lineHeightBase')};
    transition: ${th('transitionBase')};
    color: ${th('inputTextColor')};
    ${props => props.arrow && !props.multiple && 'padding-right: 1.6rem;'};

    &:focus {
      ${mixin('controlFocus')};
    }

    &[disabled] {
      background-color: ${th('inputDisabledBgColor')};
      color: ${th('inputDisabledText')};
    }
  }

  .sui-select-arrow {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    width: 0.6rem;
    pointer-events: none;
  }

  &.sui-select-sm {
    select {
      padding: ${th('inputPaddingYSm')} ${th('inputPaddingXSm')};
      font-size: ${th('fontSizeSm')};
      border-radius: ${th('borderRadiusSm')};
      ${props => props.arrow && !props.multiple && 'padding-right: 1.225rem;'};
    }

    .sui-select-arrow {
      right: 0.35rem;
      width: 0.525rem;
    }
  }

  &.sui-select-lg {
    select {
      padding: ${th('inputPaddingYLg')} ${th('inputPaddingXLg')};
      font-size: ${th('fontSizeLg')};
      border-radius: ${th('borderRadiusLg')};
      ${props => props.arrow && !props.multiple && 'padding-right: 2rem;'};
    }

    .sui-select-arrow {
      right: 0.625rem;
      width: 0.75rem;
    }
  }

  &.sui-control {
    display: block;
    width: 100%;
  }

  &.sui-control {
    display: block;
    width: 100%;

    select {
      display: block;
      width: 100%;

      &:focus {
        border-color: ${th('controlFocusBorderColor')};
        box-shadow: ${mixin('controlFocusBoxShadow', 'primary')};
      }
    }

    &.sui-is-valid select {
      border-color: ${th('success')};

      &:focus {
        border-color: ${th('success')};
        box-shadow: ${mixin('controlFocusBoxShadow', 'success')};
      }
    }

    &.sui-is-invalid select {
      border-color: ${th('danger')};

      &:focus {
        border-color: ${th('danger')};
        box-shadow: ${mixin('controlFocusBoxShadow', 'danger')};
      }
    }
  }
`

Select.propTypes = {
  arrow: PropTypes.bool,
  control: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              value: PropTypes.string.isRequired,
            }).isRequired,
          ]),
        ),
      }).isRequired,
    ]),
  ),
  valid: PropTypes.bool,
}

Select.defaultProps = {
  arrow: true,
  options: [],
  theme: defaultTheme,
}

/** @component */
export default Select
