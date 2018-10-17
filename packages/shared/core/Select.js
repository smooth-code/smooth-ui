import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import createComponent from './utils/createComponent'

const renderOption = option => {
  const { label, value } =
    typeof option === 'string' ? { label: option, value: option } : option
  return (
    <option key={value} value={value}>
      {label}
    </option>
  )
}

const sizeStyle = {
  sm: css`
    select {
      padding: ${th('inputPaddingYSm')} ${th('inputPaddingXSm')};
      font-size: ${th('fontSizeSm')};
      border-radius: ${th('borderRadiusSm')};
      ${p => p.arrow && !p.multiple && 'padding-right: 1.225rem;'};
    }

    .sui-select-arrow {
      right: 0.35rem;
      width: 0.525rem;
    }
  `,
  md: css`
    select {
      padding: ${th('inputPaddingY')} ${th('inputPaddingX')};
      font-size: ${th('fontSizeBase')};
      ${p => p.arrow && !p.multiple && 'padding-right: 1.6rem;'};
      border-radius: ${th('borderRadius')};
    }

    .sui-select-arrow {
      right: 0.5rem;
      width: 0.6rem;
    }
  `,
  lg: css`
    select {
      padding: ${th('inputPaddingYLg')} ${th('inputPaddingXLg')};
      font-size: ${th('fontSizeLg')};
      border-radius: ${th('borderRadiusLg')};
      ${p => p.arrow && !p.multiple && 'padding-right: 2rem;'};
    }

    .sui-select-arrow {
      right: 0.625rem;
      width: 0.75rem;
    }
  `,
}

const validStyle = css`
  select {
    border-color: ${th('success')};

    &:focus {
      border-color: ${th('success')};
      box-shadow: ${mixin('controlFocusBoxShadow', 'success')};
    }
  }
`

const invalidStyle = css`
  select {
    border-color: ${th('danger')};

    &:focus {
      border-color: ${th('danger')};
      box-shadow: ${mixin('controlFocusBoxShadow', 'danger')};
    }
  }
`

const controlStyle = css`
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

  ${p => {
    switch (p.valid) {
      case true:
        return validStyle
      case false:
        return invalidStyle
      default:
        return null
    }
  }};
`

const Select = createComponent(() => ({
  name: 'select',
  render: ({
    Component,
    arrow,
    control,
    className,
    options,
    size,
    valid,
    children,
    ...props
  }) => {
    if (options) {
      // eslint-disable-next-line no-console
      console.warn(
        'Smooth UI: `options` prop of "Select" is deprecated and will be removed in v7, use <option> instead.',
      )
    }
    return (
      <Component className={className}>
        {arrow && !props.multiple ? (
          <svg className="sui-select-arrow" viewBox="0 0 10 5">
            <g fill="none" fillRule="evenodd">
              <path d="M17 14H-7v-24h24" />
              <path fill="currentColor" opacity={0.5} d="M0 0l5 5 5-5" />
            </g>
          </svg>
        ) : null}
        <select {...props}>
          {children ||
            options.map(
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
      </Component>
    )
  },
  style: css`
    display: inline-block;
    position: relative;

    select {
      /* Disable appearance */
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      -webkit-border-radius: 0;

      display: inline-block;
      border-width: ${th('inputBorderWidth')};
      border-color: ${th('inputBorderColor')};
      border-style: solid;
      line-height: ${th('lineHeightBase')};
      ${th('transitionBase')};
      color: ${th('inputTextColor')};

      &:focus {
        ${mixin('controlFocus')};
      }

      &:disabled {
        background-color: ${th('inputDisabledBgColor')};
        color: ${th('inputDisabledText')};
      }
    }

    .sui-select-arrow {
      position: absolute;
      top: 50%;
      pointer-events: none;
    }

    ${p => p.size && sizeStyle[p.size]};
    ${p => p.control && controlStyle};
  `,
  propTypes: {
    arrow: PropTypes.bool,
    control: PropTypes.bool,
    options: PropTypes.array,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    valid: PropTypes.bool,
    children: PropTypes.node,
  },
  defaultProps: {
    arrow: true,
    size: 'md',
  },
}))

export default Select
