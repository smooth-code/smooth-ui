import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th } from './utils/system'
import createComponent from './utils/createComponent'

const ControlFeedback = createComponent(() => ({
  name: 'control-feedback',
  omitProps: ['valid'],
  style: p => css`
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: ${p.valid ? th('success')(p) : th('danger')(p)};
  `,
  propTypes: {
    children: PropTypes.node,
    valid: PropTypes.bool.isRequired,
  },
}))

export default ControlFeedback
