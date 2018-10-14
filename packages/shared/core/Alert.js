import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import createComponent from './utils/createComponent'

const Alert = createComponent(() => ({
  name: 'alert',
  omitProps: ['variant'],
  style: css`
    position: relative;
    padding: ${th('alertPaddingY')} ${th('alertPaddingX')};
    margin-bottom: ${th('alertMarginBottom')};
    border: 1px solid transparent;
    border-radius: ${th('borderRadius')};
    ${p => p.variant && mixin('alertVariant', p.variant)(p)};
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
