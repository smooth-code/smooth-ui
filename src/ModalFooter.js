import createComponent from './internal/createComponent'

const ModalFooter = createComponent(({ css, th, PropTypes }) => ({
  name: 'modal-footer',
  style: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${th('modalInnerPadding')};
    border-top: ${th('modalFooterBorderWidth')} solid
      ${th('modalFooterBorderColor')};

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
