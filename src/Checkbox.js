import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import InnerSwitch from './internal/InnerSwitch'
import defaultTheme from './style/defaultTheme'

const CheckboxComponent = ({ className, size, ...props }) => (
  <div
    className={classNames(
      'sui-checkbox',
      {
        'sui-checkbox-disabled': props.disabled,
        [`sui-checkbox-${size}`]: size,
      },
      className,
    )}
  >
    <InnerSwitch inputType="checkbox" {...props}>
      {({ checked, focused, disabled }) => (
        <div
          className={classNames('sui-checkbox-content', {
            checked,
            focused,
            disabled,
          })}
        >
          <svg viewBox="0 0 10 8">
            <path
              d="M3.7 7.3L.3 4l1-.8 2.4 2.3 5-4.8 1 1"
              fill="#fff"
              fillRule="evenodd"
            />
          </svg>
        </div>
      )}
    </InnerSwitch>
  </div>
)

const Checkbox = styled(CheckboxComponent)`
  display: inline-block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  z-index: ${props => props.theme.zIndexes.control};

  .sui-checkbox-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.borderRadius.md};
    border: 1px solid ${props => props.theme.colors.controlBorder};
    transition: border-color ${props => props.theme.transition.time},
      background-color ${props => props.theme.transition.time},
      box-shadow ${props => props.theme.transition.time};

    &.checked {
      background-color: ${props => props.theme.colors.primary};
      border-color: transparent;

      svg {
        transform: scale(1);
      }
    }

    &.focused {
      ${props => props.theme.mixins.controlFocus};
    }

    &.disabled {
      background-color: ${props => props.theme.colors.disabledControlBg};
    }
  }

  svg {
    width: 0.75rem;
    pointer-events: none;
    transform: scale(0);
    transition: transform ${props => props.theme.transition.time};
  }

  &.sui-checkbox-sm {
    .sui-checkbox-content {
      border-radius: ${props => props.theme.borderRadius.sm};
      width: 0.875rem;
      height: 0.875rem;
    }

    svg {
      width: 0.65rem;
    }
  }

  &.sui-checkbox-lg {
    .sui-checkbox-content {
      border-radius: ${props => props.theme.borderRadius.lg};
      width: 1.25rem;
      height: 1.25rem;
    }

    svg {
      width: 0.9375rem;
    }
  }
`

Checkbox.propTypes = {
  theme: PropTypes.object,
  size: PropTypes.oneOf(['sm', 'lg']),
}

Checkbox.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Checkbox
