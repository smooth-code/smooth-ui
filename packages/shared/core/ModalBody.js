import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th } from './utils/system'
import createComponent from './utils/createComponent'

const ModalBody = createComponent(() => ({
  name: 'modal-body',
  style: css`
    position: relative;
    /* Enable "flex-grow: 1" so that the body take up as much space as possible */
    /* when should there be a fixed height on ModalDialog. */
    flex: 1 1 auto;
    padding: ${th('modalInnerPadding')};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalBody
