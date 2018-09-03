import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th } from './utils/system'
import { up } from './utils/breakpoints'
import createComponent from './utils/createComponent'

const ModalContent = createComponent(() => ({
  name: 'modal-content',
  style: css`
    position: relative;
    display: flex;
    flex-direction: column;
    /* Ensure "ModalContent" extends the full width of the parent "ModalDialog" */
    width: 100%;
    /* Counteract the pointer-events: none; in the ModalDialog */
    pointer-events: auto;
    background-color: ${th('modalContentBg')};
    background-clip: padding-box;
    border: ${th('modalContentBorderWidth')} solid
      ${th('modalContentBorderColor')};
    border-radius: ${th('modalContentBorderRadius')};
    box-shadow: ${th('modalContentBoxShadowXs')};
    /* Remove focus outline from opened modal */
    outline: 0;

    ${up(
      'sm',
      css`
        box-shadow: ${th('modalContentBoxShadowSmUp')};
      `,
    )};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalContent
