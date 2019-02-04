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
  inputBgColor,
  inputDisabledBgColor,
  inputDisabledText,
  inputPlaceholderText,
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
    padding: ${inputPaddingYSm(p)} ${inputPaddingXSm(p)};
    font-size: ${fontSizeSm(p)};
    line-height: ${inputLineHeightSm(p)};
    border-radius: ${borderRadiusSm(p)};
  `,
  md: p => css`
    padding: ${inputPaddingY(p)} ${inputPaddingX(p)};
    font-size: ${fontSizeBase(p)};
    line-height: ${inputLineHeight(p)};
    border-radius: ${borderRadius(p)};
  `,
  lg: p => css`
    padding: ${inputPaddingYLg(p)} ${inputPaddingXLg(p)};
    font-size: ${fontSizeLg(p)};
    line-height: ${inputLineHeightLg(p)};
    border-radius: ${borderRadiusLg(p)};
  `,
}

const validStyle = p => {
  const { valid } = p
  if (valid !== true && valid !== false) return null
  const color = valid ? success(p) : danger(p)
  return css`
    border-color: ${color};

    &:focus {
      border-color: ${color};
      ${controlFocus(color)(p)}
    }
  `
}

const controlStyle = p => css`
  display: block;
  width: 100%;

  &:focus {
    ${controlFocus(primary(p))(p)}
  }

  ${validStyle(p)};
`

const Input = createComponent(() => ({
  name: 'input',
  defaultComponent: 'input',
  omitProps: ['control', 'size', 'valid'],
  style: p => css`
    display: inline-block;
    border-width: ${inputBorderWidth(p)};
    border-color: ${inputBorderColor(p)};
    border-style: solid;
    line-height: ${inputLineHeight(p)};
    color: ${inputTextColor(p)};
    ${transitionBase(p)};
    background-color: ${inputBgColor(p)};

    &[type='number'] {
      padding-right: 6px;
    }

    &::placeholder {
      color: ${inputPlaceholderText(p)};
    }

    &:focus {
      ${baseFocus(primary(p))(p)}
    }

    &:disabled {
      background-color: ${inputDisabledBgColor(p)};
      color: ${inputDisabledText(p)};
    }

    ${p.size && sizeStyle[p.size] && sizeStyle[p.size](p)};
    ${p.control && controlStyle(p)};
  `,
  propTypes: {
    control: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    valid: PropTypes.bool,
  },
  defaultProps: {
    size: 'md',
  },
}))

export default Input
