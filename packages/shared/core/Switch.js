import React from 'react'
import PropTypes from 'prop-types'
import { system } from '@smooth-ui/system'
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import createComponent from './utils/createComponent'
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
  style: css`
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
      ${th('transitionBase')};
      font-size: 9px;
      font-weight: 800;
    }

    input:focused + .sui-switch-wrapper {
      ${mixin('controlFocus')};
    }

    input:checked + .sui-switch-wrapper {
      background-color: ${th('primaryLight')};
      border-color: transparent;

      .sui-switch-content {
        transform: translateX(0);
      }

      .sui-switch-ball {
        background-color: ${th('primary')};
      }
    }

    input:disabled + .sui-switch-wrapper {
      opacity: 0.5;
    }

    .sui-switch-ball {
      flex-shrink: 0;
      background-color: ${th('gray500')};
      border-radius: 50%;
      width: 18px;
      height: 18px;
      ${th('transitionBase')};
    }

    .sui-switch-content {
      display: flex;
      align-items: center;
      height: 22px;
      ${th('transitionBase')};
      transform: translateX(-25px);
    }

    .sui-switch-label {
      flex-shrink: 0;
      width: 27px;
      text-align: center;
      user-select: none;

      &.sui-switch-label-on {
        color: ${th('primary')};
      }

      &.sui-switch-label-off {
        color: ${th('gray900')};
      }
    }

    .sui-switch-wrapper {
      ${system};
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
