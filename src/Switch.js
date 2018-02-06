import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import defaultTheme from './style/defaultTheme'
import InnerSwitch from './internal/InnerSwitch'

const SwitchComponent = ({ className, labeled, ...props }) => (
  <div
    className={classNames(
      'sui-switch',
      { 'sui-switch-disabled': props.disabled },
      className,
    )}
  >
    <InnerSwitch inputType="checkbox" {...props}>
      {({ checked, focused, disabled }) => (
        <div
          className={classNames('sui-switch-wrapper', {
            checked,
            focused,
            disabled,
          })}
        >
          <div className="sui-switch-content">
            <span className="sui-switch-label on">{labeled ? 'ON' : ''}</span>
            <div className="sui-switch-ball" />
            <span className="sui-switch-label off">{labeled ? 'OFF' : ''}</span>
          </div>
        </div>
      )}
    </InnerSwitch>
  </div>
)

const Switch = styled(SwitchComponent)`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 24px;

  .sui-switch-wrapper {
    width: 50px;
    height: 24px;
    border-radius: 34px;
    background-color: ${props => props.theme.colors.grayLight};
    overflow: hidden;
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.controlBorder};
    transition: background-color ${props => props.theme.transition.time},
      border-color ${props => props.theme.transition.time};

    &.focused {
      ${props => props.theme.mixins.controlFocus};
    }

    &.checked {
      .sui-switch-content {
        transform: translateX(0);
      }

      background-color: ${props => props.theme.colors.primaryLight};
      border-color: transparent;

      .sui-switch-ball {
        background-color: ${props => props.theme.colors.primary};
      }
    }

    &.disabled {
      opacity: 0.5;
    }
  }

  .sui-switch-ball {
    flex-shrink: 0;
    background-color: ${props => props.theme.colors.gray};
    border-radius: 50%;
    width: 18px;
    height: 18px;
    transition: background-color ${props => props.theme.transition.time};
  }

  .sui-switch-content {
    display: flex;
    align-items: center;
    height: 22px;
    transition: transform ${props => props.theme.transition.time};
    transform: translateX(-25px);
  }

  .sui-switch-label {
    flex-shrink: 0;
    font-size: 9px;
    font-weight: 800;
    width: 27px;
    text-align: center;
    user-select: none;

    &.on {
      color: ${props => props.theme.colors.primary};
    }

    &.off {
      color: ${props => props.theme.colors.grayDark};
    }
  }
`

Switch.propTypes = {
  /** Add ON/OFF labels. */
  labeled: PropTypes.bool,
  theme: PropTypes.object,
}

Switch.defaultProps = {
  labeled: false,
  theme: defaultTheme,
}

/** @component */
export default Switch
