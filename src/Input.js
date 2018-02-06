import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import handleRef from './internal/handleRef'
import defaultTheme from './style/defaultTheme'

const InputComponent = ({ className, size, control, ...props }) => (
  <input
    {...props}
    className={classNames(
      'sui-input',
      {
        'sui-control': control,
        [`sui-input-${size}`]: size,
      },
      className,
    )}
  />
)

const Input = styled(handleRef(InputComponent))`
  display: inline-block;
  border: 1px solid ${props => props.theme.colors.controlBorder};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.textControlPadding.md};
  font-size: ${props => props.theme.controlFontSize.md};
  line-height: 1.5;
  color: ${props => props.theme.colors.controlText};
  transition: border-color ${props => props.theme.transition.time},
    box-shadow ${props => props.theme.transition.time};

  &[type='number'] {
    padding-right: 6px;
  }

  &::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }

  &:focus {
    ${props => props.theme.mixins.controlFocus};
  }

  &[disabled] {
    background-color: ${props => props.theme.colors.disabledControlBg};
    color: ${props => props.theme.colors.disabledControlText};
  }

  &.sui-input-sm {
    padding: ${props => props.theme.textControlPadding.sm};
    font-size: ${props => props.theme.controlFontSize.sm};
    border-radius: ${props => props.theme.borderRadius.sm};
  }

  &.sui-input-lg {
    padding: ${props => props.theme.textControlPadding.lg};
    font-size: ${props => props.theme.controlFontSize.lg};
    border-radius: ${props => props.theme.borderRadius.lg};
  }

  ${props => props.theme.mixins.control};
`

Input.propTypes = {
  theme: PropTypes.object,
  control: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
}

Input.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Input
