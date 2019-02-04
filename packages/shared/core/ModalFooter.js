import PropTypes from 'prop-types'
import { css } from './styled-engine'
import {
  modalInnerPadding,
  modalFooterBorderWidth,
  modalFooterBorderColor,
} from './theming/index'
import createComponent from './createComponent'

const ModalFooter = createComponent(() => ({
  name: 'modal-footer',
  style: p => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${modalInnerPadding(p)};
    border-top-width: ${modalFooterBorderWidth(p)};
    border-top-style: solid;
    border-top-color: ${modalFooterBorderColor(p)};

    /* Easily place margin between footer elements */
    > :not(:first-child) {
      margin-left: 0.25rem;
    }
    > :not(:last-child) {
      margin-right: 0.25rem;
    }
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalFooter
