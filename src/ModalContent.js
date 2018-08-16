import createComponent from './internal/createComponent'

const ModalContent = createComponent(({ css, th, up, PropTypes }) => ({
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
