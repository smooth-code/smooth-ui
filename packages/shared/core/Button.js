import PropTypes from 'prop-types'
import { css } from './styled-engine'
import {
  fontSizeSm,
  borderRadiusSm,
  fontSizeBase,
  borderRadius,
  fontSizeLg,
  borderRadiusLg,
  zIndexControl,
  transitionBase,
  btnPaddingYSm,
  btnPaddingXSm,
  btnLineHeightSm,
  btnPaddingY,
  btnPaddingX,
  btnLineHeight,
  btnPaddingYLg,
  btnPaddingXLg,
  btnLineHeightLg,
  btnBorderWidth,
  btnDisabledOpacity,
  btnVariant,
} from './theming/index'
import createComponent from './createComponent'

const btnSize = {
  sm: p => css`
    padding: ${btnPaddingYSm(p)} ${btnPaddingXSm(p)};
    font-size: ${fontSizeSm(p)};
    border-radius: ${borderRadiusSm(p)};
    line-height: ${btnLineHeightSm(p)};
  `,
  md: p => css`
    padding: ${btnPaddingY(p)} ${btnPaddingX(p)};
    font-size: ${fontSizeBase(p)};
    border-radius: ${borderRadius(p)};
    line-height: ${btnLineHeight(p)};
  `,
  lg: p => css`
    padding: ${btnPaddingYLg(p)} ${btnPaddingXLg(p)};
    font-size: ${fontSizeLg(p)};
    border-radius: ${borderRadiusLg(p)};
    line-height: ${btnLineHeightLg(p)};
  `,
}

const Button = createComponent(() => ({
  name: 'button',
  defaultComponent: 'button',
  omitProps: ['size', 'variant'],
  style: p => css`
    display: inline-block;
    z-index: ${zIndexControl(p)};
    border-width: ${btnBorderWidth(p)};
    cursor: pointer;

    ${transitionBase(p)};

    /* When used as link */
    text-decoration: none;

    &:disabled {
      opacity: ${btnDisabledOpacity(p)};
    }

    ${p.size && btnSize[p.size] && btnSize[p.size](p)};
    ${p.variant && btnVariant(p.variant)(p)};
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
