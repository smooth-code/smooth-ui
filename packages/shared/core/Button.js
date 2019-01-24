import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import createComponent from './utils/createComponent'

const sizeStyle = {
  sm: css`
    padding: ${th('btnPaddingYSm')} ${th('btnPaddingXSm')};
    font-size: ${th('fontSizeSm')};
    border-radius: ${th('borderRadiusSm')};
    line-height: ${th('btnLineHeightSm')};
  `,
  md: css`
    padding: ${th('btnPaddingY')} ${th('btnPaddingX')};
    font-size: ${th('fontSizeBase')};
    border-radius: ${th('borderRadius')};
    line-height: ${th('btnLineHeight')};
  `,
  lg: css`
    padding: ${th('btnPaddingYLg')} ${th('btnPaddingXLg')};
    font-size: ${th('fontSizeLg')};
    border-radius: ${th('borderRadiusLg')};
    line-height: ${th('btnLineHeightLg')};
  `,
}

const Button = createComponent(() => ({
  name: 'button',
  defaultComponent: 'button',
  omitProps: ['size', 'variant'],
  style: p => css`
    display: inline-block;
    padding: ${th('btnPaddingY')} ${th('btnPaddingX')};
    z-index: ${th('zIndexControl')};
    border-radius: ${th('borderRadius')};
    font-size: ${th('fontSizeBase')};
    line-height: ${th('btnLineHeight')};
    border-width: ${th('btnBorderWidth')};
    cursor: pointer;

    ${th('transitionBase')};

    /* When used as link */
    text-decoration: none;

    &:disabled {
      opacity: ${th('btnDisabledOpacity')};
    }

    ${p.size && sizeStyle[p.size]};
    ${p.variant && mixin('btnVariant', p.variant)(p)};
  `,
  propTypes: {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.string,
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}))

export default Button
