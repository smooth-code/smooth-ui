import PropTypes from 'prop-types'
import createComponent from './internal/createComponent'

const FormGroup = createComponent(({ css }) => ({
  name: 'form-group',
  style: css`
    margin-bottom: 1rem;
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default FormGroup
