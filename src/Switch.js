import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import * as defaultTheme from './style/defaultTheme'
import InnerSwitch from './internal/InnerSwitch'
import { th } from './utils'

const SwitchComponent = ({ className, labeled, theme, ...props }) => (
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
    background-color: ${th('gray300')};
    overflow: hidden;
    cursor: pointer;
    border-width: ${th('inputBorderWidth')};
    border-color: ${th('inputBorderColor')};
    border-style: solid;
    transition: ${th('transitionBase')};

    &.focused {
      ${th('controlFocus')};
    }

    &.checked {
      .sui-switch-content {
        transform: translateX(0);
      }

      background-color: ${th('primaryLight')};
      border-color: transparent;

      .sui-switch-ball {
        background-color: ${th('primary')};
      }
    }

    &.disabled {
      opacity: 0.5;
    }
  }

  .sui-switch-ball {
    flex-shrink: 0;
    background-color: ${th('gray500')};
    border-radius: 50%;
    width: 18px;
    height: 18px;
    transition: ${th('transitionBase')};
  }

  .sui-switch-content {
    display: flex;
    align-items: center;
    height: 22px;
    transition: ${th('transitionBase')};
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
      color: ${th('primary')};
    }

    &.off {
      color: ${th('gray900')};
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
