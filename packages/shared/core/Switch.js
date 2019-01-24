import React from 'react'
import PropTypes from 'prop-types'
import { system } from '@smooth-ui/system'
import { css } from './styled-engine'
import {
  inputBorderWidth,
  inputBorderColor,
  baseFocus,
  transitionBase,
  gray300,
  gray500,
  gray900,
  primary,
  primaryLight,
} from './theming/index'
import createComponent from './createComponent'
import SwitchState from './SwitchState'

const Switch = createComponent(() => ({
  name: 'switch',
  system,
  applySystem: null,
  render: ({
    Component,
    ref,
    className,
    onLabel = 'ON',
    offLabel = 'OFF',
    labeled,
    ...props
  }) => (
    <SwitchState {...props}>
      {({ input }) => (
        <Component className={className}>
          <input ref={ref} type="checkbox" {...input} />
          <div className="sui-switch-wrapper">
            <div className="sui-switch-content">
              <span className="sui-switch-label sui-switch-label-on">
                {labeled ? onLabel : ''}
              </span>
              <div className="sui-switch-ball" />
              <span className="sui-switch-label sui-switch-label-off">
                {labeled ? offLabel : ''}
              </span>
            </div>
          </div>
        </Component>
      )}
    </SwitchState>
  ),
  style: p => css`
    display: inline-block;
    position: relative;
    width: 50px;
    height: 24px;

    .sui-switch-wrapper {
      width: 50px;
      height: 24px;
      border-radius: 34px;
      background-color: ${gray300(p)};
      overflow: hidden;
      cursor: pointer;
      border-width: ${inputBorderWidth(p)};
      border-color: ${inputBorderColor(p)};
      border-style: solid;
      font-size: 9px;
      font-weight: 800;
      ${transitionBase(p)};
    }

    input:focused + .sui-switch-wrapper {
      ${baseFocus(primary(p))(p)};
    }

    input:checked + .sui-switch-wrapper {
      background-color: ${primaryLight(p)};
      border-color: transparent;

      .sui-switch-content {
        transform: translateX(0);
      }

      .sui-switch-ball {
        background-color: ${primary(p)};
      }
    }

    input:disabled + .sui-switch-wrapper {
      opacity: 0.5;
    }

    .sui-switch-ball {
      flex-shrink: 0;
      background-color: ${gray500(p)};
      border-radius: 50%;
      width: 18px;
      height: 18px;
      ${transitionBase(p)};
    }

    .sui-switch-content {
      display: flex;
      align-items: center;
      height: 22px;
      transform: translateX(-25px);
      ${transitionBase(p)};
    }

    .sui-switch-label {
      flex-shrink: 0;
      width: 27px;
      text-align: center;
      user-select: none;

      &.sui-switch-label-on {
        color: ${primary(p)};
      }

      &.sui-switch-label-off {
        color: ${gray900(p)};
      }
    }

    .sui-switch-wrapper {
      ${system.props};
    }
  `,
  propTypes: {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    labeled: PropTypes.bool,
    onLabel: PropTypes.string,
    offLabel: PropTypes.string,
    onChange: PropTypes.func,
  },
}))

export default Switch
