import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { inputDisabledText } from './theming/index'
import createComponent from './createComponent'

const FormCheckLabel = createComponent(() => ({
  name: 'form-check-label',
  defaultComponent: 'label',
  style: p => css`
    padding-left: 0.25rem;

    [class*='disabled'] ~ & {
      color: ${inputDisabledText(p)};
    }
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default FormCheckLabel
