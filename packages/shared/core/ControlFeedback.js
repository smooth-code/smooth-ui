import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { danger, success } from './theming/index'
import createComponent from './createComponent'

const ControlFeedback = createComponent(() => ({
  name: 'control-feedback',
  omitProps: ['valid'],
  style: p => css`
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: ${p.valid ? success(p) : danger(p)};
  `,
  propTypes: {
    children: PropTypes.node,
    valid: PropTypes.bool.isRequired,
  },
}))

export default ControlFeedback
