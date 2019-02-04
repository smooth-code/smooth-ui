import PropTypes from 'prop-types'
import { css } from './styled-engine'
import createComponent from './createComponent'

const inlineStyle = css`
  display: inline-flex;
  margin-right: 0.75rem;
`

const FormCheck = createComponent(() => ({
  name: 'form-check',
  omitProps: ['inline'],
  style: p => css`
    display: flex;
    align-items: center;
    ${p.inline && inlineStyle};
  `,
  propTypes: {
    children: PropTypes.node,
    inline: PropTypes.bool,
  },
}))

export default FormCheck
