import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { modalInnerPadding } from './theming/index'
import createComponent from './createComponent'

const ModalBody = createComponent(() => ({
  name: 'modal-body',
  style: p => css`
    position: relative;
    /* Enable "flex-grow: 1" so that the body take up as much space as possible */
    /* when should there be a fixed height on ModalDialog. */
    flex: 1 1 auto;
    padding: ${modalInnerPadding(p)};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalBody
