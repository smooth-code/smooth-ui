import PropTypes from 'prop-types'
import { css } from './styled-engine'
import createComponent from './createComponent'

const FormGroup = createComponent(() => ({
  name: 'form-group',
  style: () => css`
    margin-bottom: 1rem;
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default FormGroup
