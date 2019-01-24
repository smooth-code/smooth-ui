import PropTypes from 'prop-types'
import { css } from './styled-engine'
import {
  borderRadius,
  alertPaddingY,
  alertPaddingX,
  alertMarginBottom,
  alertVariant,
} from './theming/index'
import createComponent from './createComponent'

const Alert = createComponent(() => ({
  name: 'alert',
  omitProps: ['variant'],
  style: p => css`
    position: relative;
    padding: ${alertPaddingY(p)} ${alertPaddingX(p)};
    margin-bottom: ${alertMarginBottom(p)};
    border: 1px solid transparent;
    border-radius: ${borderRadius(p)};
    ${p.variant && alertVariant(p.variant)(p)};
  `,
  propTypes: {
    children: PropTypes.node,
    variant: PropTypes.string,
  },
  defaultProps: {
    variant: 'primary',
  },
}))

export default Alert
