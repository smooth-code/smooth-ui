import PropTypes from 'prop-types'
import createComponent from './internal/createComponent'

const FormCheckLabel = createComponent(({ css, th }) => ({
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
