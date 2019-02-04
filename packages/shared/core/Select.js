import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import {
  inputPaddingY,
  inputPaddingX,
  inputLineHeight,
  inputPaddingYSm,
  inputPaddingXSm,
  inputLineHeightSm,
  inputPaddingYLg,
  inputPaddingXLg,
  inputLineHeightLg,
  inputBorderWidth,
  inputBorderColor,
  inputDisabledBgColor,
  inputDisabledText,
  inputTextColor,
  fontSizeSm,
  borderRadiusSm,
  fontSizeBase,
  borderRadius,
  fontSizeLg,
  borderRadiusLg,
  success,
  danger,
  controlFocus,
  transitionBase,
  primary,
  baseFocus,
} from './theming/index'
import createComponent from './createComponent'

const sizeStyle = {
  sm: p => css`
    select {
      padding: ${inputPaddingYSm(p)} ${inputPaddingXSm(p)};
      font-size: ${fontSizeSm(p)};
      line-height: ${inputLineHeightSm(p)};
      border-radius: ${borderRadiusSm(p)};
      ${p.arrow && !p.multiple && 'padding-right: 1.225rem;'};
    }

    .sui-select-arrow {
      right: 0.35rem;
      width: 0.525rem;
    }
  `,
  md: p => css`
    select {
      padding: ${inputPaddingY(p)} ${inputPaddingX(p)};
      font-size: ${fontSizeBase(p)};
      line-height: ${inputLineHeight(p)};
      ${p.arrow && !p.multiple && 'padding-right: 1.6rem;'};
      border-radius: ${borderRadius(p)};
    }

    .sui-select-arrow {
      right: 0.5rem;
      width: 0.6rem;
    }
  `,
  lg: p => css`
    select {
      padding: ${inputPaddingYLg(p)} ${inputPaddingXLg(p)};
      font-size: ${fontSizeLg(p)};
      line-height: ${inputLineHeightLg(p)};
      border-radius: ${borderRadiusLg(p)};
      ${p.arrow && !p.multiple && 'padding-right: 2rem;'};
    }

    .sui-select-arrow {
      right: 0.625rem;
      width: 0.75rem;
    }
  `,
}

const validStyle = p => {
  const { valid } = p
  if (valid !== true && valid !== false) return null
  const color = valid ? success(p) : danger(p)
  return css`
    select {
      border-color: ${color};

      &:focus {
        border-color: ${color};
        ${controlFocus(color)(p)}
      }
    }
  `
}

const controlStyle = p => css`
  &,
  select {
    display: block;
    width: 100%;
  }

  select:focus {
    ${controlFocus(primary(p))(p)};
  }

  ${validStyle(p)};
`

const Arrow = () => (
  <svg className="sui-select-arrow" viewBox="0 0 10 5">
    <g fill="none" fillRule="evenodd">
      <path d="M17 14H-7v-24h24" />
      <path fill="currentColor" opacity={0.5} d="M0 0l5 5 5-5" />
    </g>
  </svg>
)

const Select = createComponent(() => ({
  name: 'select',
  render: ({
    Component,
    arrow,
    control,
    className,
    size,
    valid,
    children,
    ...props
  }) => (
    <Component className={className}>
      {arrow && !props.multiple ? <Arrow /> : null}
      <select {...props}>{children}</select>
    </Component>
  ),
  style: p => css`
    display: inline-block;
    position: relative;

    select {
      /* Disable appearance */
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      -webkit-border-radius: 0;

      display: inline-block;
      border-width: ${inputBorderWidth(p)};
      border-color: ${inputBorderColor(p)};
      border-style: solid;
      line-height: ${inputLineHeight(p)};
      ${transitionBase(p)};
      color: ${inputTextColor(p)};

      &:focus {
        ${baseFocus(primary(p))(p)};
      }

      &:disabled {
        background-color: ${inputDisabledBgColor(p)};
        color: ${inputDisabledText(p)};
      }
    }

    .sui-select-arrow {
      position: absolute;
      top: 50%;
      pointer-events: none;
    }

    ${p.size && sizeStyle[p.size] && sizeStyle[p.size](p)};
    ${p.control && controlStyle(p)};
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
