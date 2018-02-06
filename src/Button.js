import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { darken } from 'polished'
import handleRef from './internal/handleRef'
import defaultTheme from './style/defaultTheme'

const ButtonComponent = ({ className, size, ...props }) => (
  <button
    {...props}
    className={classNames(
      'sui-button',
      {
        [`sui-button-${size}`]: size,
      },
      className,
    )}
  />
)

const Button = styled(handleRef(ButtonComponent))`
  display: inline-block;
  padding: ${props => props.theme.textControlPadding.sm};
  z-index: ${props => props.theme.zIndexes.control};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 1rem;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: 0;
  cursor: pointer;
  transition: background-color 300ms;

  &:focus {
    ${props => props.theme.mixins.controlFocus};
  }

  &:not(:disabled):hover,
  &:not(:disabled):active {
    background-color: ${props => darken(0.05, props.theme.colors.primary)};
  }

  &.sui-button-lg {
    padding: ${props => props.theme.textControlPadding.lg};
    font-size: ${props => props.theme.controlFontSize.lg};
    border-radius: ${props => props.theme.borderRadius.lg};
  }

  &.sui-button-sm {
    padding: ${props => props.theme.textControlPadding.sm};
    font-size: ${props => props.theme.controlFontSize.sm};
    border-radius: ${props => props.theme.borderRadius.sm};
  }

  &:disabled {
    opacity: 0.8;
  }
`

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']),
  disabled: PropTypes.bool,
  theme: PropTypes.object,
}

Button.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Button
