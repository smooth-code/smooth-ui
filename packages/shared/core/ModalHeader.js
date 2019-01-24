import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th } from './utils/system'
import createComponent from './utils/createComponent'

const ModalHeader = createComponent(() => ({
  name: 'modal-header',
  style: () => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${th('modalInnerPadding')};
    border-bottom: ${th('modalHeaderBorderWidth')} solid
      ${th('modalHeaderBorderColor')};
    border-top-left-radius: ${th('modalContentBorderRadius')};
    border-top-right-radius: ${th('modalContentBorderRadius')};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalHeader
