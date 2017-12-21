import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import handleRef from './internal/handleRef'
import defaultTheme from './style/defaultTheme'

const TextareaComponent = ({ className, size, ...props }) => (
  <textarea
    {...props}
    className={classNames(
      'sui-textarea',
      {
        [`sui-textarea-${size}`]: size,
      },
      className,
    )}
  />
)

const Textarea = styled(handleRef(TextareaComponent))`
  display: inline-block;
  border: 1px solid ${props => props.theme.colors.controlBorder};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.textControlPadding.md};
  font-size: ${props => props.theme.controlFontSize.md};
  line-height: 1.5;
  transition: border-color ${props => props.theme.transition.time},
    box-shadow ${props => props.theme.transition.time};
  color: ${props => props.theme.colors.controlText};

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

  &.sui-textarea-sm {
    padding: ${props => props.theme.textControlPadding.sm};
    font-size: ${props => props.theme.controlFontSize.sm};
    border-radius: ${props => props.theme.borderRadius.sm};
  }

  &.sui-textarea-lg {
    padding: ${props => props.theme.textControlPadding.lg};
    font-size: ${props => props.theme.controlFontSize.lg};
    border-radius: ${props => props.theme.borderRadius.lg};
  }
`

Textarea.propTypes = {
  theme: PropTypes.object,
  size: PropTypes.oneOf(['sm', 'lg']),
}

Textarea.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Textarea
