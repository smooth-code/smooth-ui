import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { mixin, th, up } from './utils'

const ModalContentComponent = ({
  className,
  component: Component = 'div',
  theme,
  ...props
}) => (
  <Component
    className={classNames('sui-modal-content', className)}
    {...props}
  />
)

const ModalContentRefComponent = handleRef(ModalContentComponent)

const ModalContent = styled(ModalContentComponent)`
  ${mixin('base')};
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
`

ModalContent.propTypes = {
  children: PropTypes.node,
}

ModalContent.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(ModalContent, ModalContentRefComponent)

/** @component */
export default ModalContent
