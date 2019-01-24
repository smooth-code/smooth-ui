import PropTypes from 'prop-types'
import { css } from './styled-engine'
import {
  modalInnerPadding,
  modalHeaderBorderWidth,
  modalHeaderBorderColor,
  modalContentBorderRadius,
} from './theming/index'
import createComponent from './createComponent'

const ModalHeader = createComponent(() => ({
  name: 'modal-header',
  style: p => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: ${modalInnerPadding(p)};
    border-bottom-style: solid;
    border-bottom-width: ${modalHeaderBorderWidth(p)};
    border-bottom-color: ${modalHeaderBorderColor(p)};
    border-top-left-radius: ${modalContentBorderRadius(p)};
    border-top-right-radius: ${modalContentBorderRadius(p)};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalHeader
