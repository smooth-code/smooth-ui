import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import InnerSwitch from './internal/InnerSwitch'
import * as defaultTheme from './style/defaultTheme'
import { th } from './utils'

const CheckboxComponent = ({ className, size, theme, ...props }) => (
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
  z-index: ${th('zIndexControl')};

  .sui-checkbox-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    background-color: ${th('inputBgColor')};
    border-radius: ${th('borderRadius')};
    border-style: solid;
    border-width: ${th('inputBorderWidth')};
    border-color: ${th('inputBorderColor')};
    transition: ${th('transitionBase')};

    &.checked {
      background-color: ${th('primary')};
      border-color: transparent;

      svg {
        transform: scale(1);
      }
    }

    &.focused {
      ${th('controlFocus')};
    }

    &.disabled {
      background-color: ${th('inputDisabledBgColor')};
    }
  }

  svg {
    width: 0.75rem;
    pointer-events: none;
    transform: scale(0);
    transition: ${th('transitionBase')};
  }

  &.sui-checkbox-sm {
    .sui-checkbox-content {
      border-radius: ${th('borderRadiusSm')};
      width: 0.875rem;
      height: 0.875rem;
    }

    svg {
      width: 0.65rem;
    }
  }

  &.sui-checkbox-lg {
    .sui-checkbox-content {
      border-radius: ${th('borderRadiusLg')};
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
