import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { up, modalDialogMargin, modalDialogMarginYSmUp } from './theming/index'
import createComponent from './createComponent'
import { calc } from './utils/index'

const ModalDialog = createComponent(() => ({
  name: 'modal-dialog',
  render: ({ Component, ...props }) => (
    <Component role="dialog" aria-modal="true" {...props} />
  ),
  style: p => {
    const margin = modalDialogMargin(p)
    const upSmMargin = modalDialogMarginYSmUp(p)
    return css`
      position: relative;
      width: auto;
      margin: ${margin};
      pointer-events: none;

      /* center modal */
      display: flex;
      align-items: center;
      min-height: calc(100% - ${calc(margin, x => x * 2)});

      ${up(
        'sm',
        css`
          max-width: 500px;
          margin: ${upSmMargin} auto;
          min-height: calc(100% - ${calc(upSmMargin, x => x * 2)});
        `,
      )};
    `
  },
  propTypes: {
    children: PropTypes.node,
  },
}))

export default ModalDialog
