import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th } from './utils/system'
import createComponent from './utils/createComponent'

const FormCheckLabel = createComponent(() => ({
  name: 'form-check-label',
  defaultComponent: 'label',
  style: css`
    padding-left: 0.25rem;

    [class*='disabled'] ~ & {
      color: ${th('inputDisabledText')};
    }
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default FormCheckLabel
