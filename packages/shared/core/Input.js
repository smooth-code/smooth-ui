import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import createComponent from './utils/createComponent'

const sizeStyle = {
  sm: css`
    padding: ${th('inputPaddingYSm')} ${th('inputPaddingXSm')};
    font-size: ${th('fontSizeSm')};
    border-radius: ${th('borderRadiusSm')};
  `,
  md: css`
    padding: ${th('inputPaddingY')} ${th('inputPaddingX')};
    font-size: ${th('fontSizeBase')};
    border-radius: ${th('borderRadius')};
  `,
  lg: css`
    padding: ${th('inputPaddingYLg')} ${th('inputPaddingXLg')};
    font-size: ${th('fontSizeLg')};
    border-radius: ${th('borderRadiusLg')};
  `,
}

const validStyle = css`
  border-color: ${th('success')};

  &:focus {
    border-color: ${th('success')};
    box-shadow: ${mixin('controlFocusBoxShadow', 'success')};
  }
`

const invalidStyle = css`
  border-color: ${th('danger')};

  &:focus {
    border-color: ${th('danger')};
    box-shadow: ${mixin('controlFocusBoxShadow', 'danger')};
  }
`

const controlStyle = css`
  display: block;
  width: 100%;

  &:focus {
    border-color: ${th('controlFocusBorderColor')};
    box-shadow: ${mixin('controlFocusBoxShadow', 'primary')};
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

const Input = createComponent(() => ({
  name: 'input',
  defaultComponent: 'input',
  omitProps: ['control', 'size', 'valid'],
  style: css`
    display: inline-block;
    border-width: ${th('inputBorderWidth')};
    border-color: ${th('inputBorderColor')};
    border-style: solid;
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

    &:disabled {
      background-color: ${th('inputDisabledBgColor')};
      color: ${th('inputDisabledText')};
    }

    ${p => p.size && sizeStyle[p.size]};
    ${p => p.control && controlStyle};
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
