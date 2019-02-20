/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import createComponent from './createComponent'

const Label = createComponent(() => ({
  name: 'label',
  defaultComponent: 'label',
  style: () => css`
    display: inline-block;
    margin-bottom: 0.5rem;
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default Label
