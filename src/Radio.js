import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import defaultTheme from './style/defaultTheme'
import InnerSwitch from './internal/InnerSwitch'

const RadioComponent = ({ className, size, ...props }) => (
  <div
    className={classNames(
      'sui-radio',
      {
        'sui-radio-disabled': props.disabled,
        [`sui-radio-${size}`]: size,
      },
      className,
    )}
  >
    <InnerSwitch inputType="radio" {...props}>
      {({ focused, checked, disabled }) => (
        <div
          className={classNames('sui-radio-content', {
            focused,
            checked,
            disabled,
          })}
        >
          <div className="sui-radio-circle" />
        </div>
      )}
    </InnerSwitch>
  </div>
)

const Radio = styled(RadioComponent)`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;

  .sui-radio-content {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.controlBorder};
    transition: border-color ${props => props.theme.transition.time},
      background-color ${props => props.theme.transition.time},
      box-shadow ${props => props.theme.transition.time};

    &.checked {
      border-color: ${props => props.theme.colors.primary};

      .sui-radio-circle {
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

  .sui-radio-circle {
    width: 0.6rem;
    height: 0.6rem;
    transition: transform ${props => props.theme.transition.time};
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    transform: scale(0);
  }

  &.sui-radio-sm {
    .sui-radio-content {
      width: 0.875rem;
      height: 0.875rem;
    }

    .sui-radio-circle {
      width: 0.525rem;
      height: 0.525rem;
    }
  }

  &.sui-radio-lg {
    .sui-radio-content {
      width: 1.25rem;
      height: 1.25rem;
    }

    .sui-radio-circle {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`

Radio.propTypes = {
  theme: PropTypes.object,
  size: PropTypes.oneOf(['sm', 'lg']),
}

Radio.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Radio
