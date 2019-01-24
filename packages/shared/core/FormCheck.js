import PropTypes from 'prop-types'
import { css } from './styled-engine'
import createComponent from './utils/createComponent'

const FormCheck = createComponent(() => ({
  name: 'form-check',
  omitProps: ['inline'],
  style: p => css`
    display: flex;
    align-items: center;

    ${p.inline &&
      css`
        display: inline-flex;
        margin-right: 0.75rem;
      `};
  `,
  propTypes: {
    children: PropTypes.node,
    inline: PropTypes.bool,
  },
}))

export default FormCheck
