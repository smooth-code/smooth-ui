import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import * as defaultTheme from './theme/defaultTheme'
import { up, mixin } from './utils'

const ModalDialogComponent = ({ centered, className, theme, ...props }) => (
  <div
    role="document"
    className={classNames(
      'sui-modal-dialog',
      { 'sui-modal-dialog-centered': centered },
      className,
    )}
    {...props}
  />
)

const ModalDialog = styled(ModalDialogComponent)`
  ${mixin('base')};
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;

  ${up(
    'sm',
    css`
      max-width: 500px;
      margin: 1.75rem auto;
    `,
  )};

  &.sui-modal-dialog-centered {
    min-height: calc(100% - (1.75rem * 2));
  }
`

ModalDialog.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.object,
}

ModalDialog.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default ModalDialog
