import PropTypes from 'prop-types'
import createComponent from './internal/createComponent'

const ModalBody = createComponent(({ css, th }) => ({
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
