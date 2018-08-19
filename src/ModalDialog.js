import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th, calc } from './utils/system'
import { up } from './utils/breakpoints'
import createComponent from './utils/createComponent'

const ModalDialog = createComponent(() => ({
  name: 'modal-dialog',
  render: ({ Component, ...props }) => <Component role="document" {...props} />,
  style: css`
    position: relative;
    width: auto;
    margin: ${th('modalDialogMargin')};
    pointer-events: none;

    /* center modal */
    display: flex;
    align-items: center;
    min-height: calc(
      100% - ${th('modalDialogMargin', value => calc(value, x => x * 2))}
    );

    ${up(
      'sm',
      css`
        max-width: 500px;
        margin: ${th('modalDialogMarginYSmUp')} auto;
        min-height: calc(
          100% -
            ${th('modalDialogMarginYSmUp', value => calc(value, x => x * 2))}
        );
      `,
    )};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalDialog
