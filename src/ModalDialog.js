import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { up, mixin, th, calc } from './utils'

const ModalDialogComponent = ({
  className,
  component: Component = 'div',
  theme,
  ...props
}) => (
  <Component
    role="document"
    className={classNames('sui-modal-dialog', className)}
    {...props}
  />
)

const ModalDialogRefComponent = handleRef(ModalDialogComponent)

const ModalDialog = styled(ModalDialogRefComponent)`
  ${mixin('base')};
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
        100% - ${th('modalDialogMarginYSmUp', value => calc(value, x => x * 2))}
      );
    `,
  )};
`

ModalDialog.propTypes = {
  children: PropTypes.node,
}

ModalDialog.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(ModalDialog, ModalDialogRefComponent)

/** @component */
export default ModalDialog
