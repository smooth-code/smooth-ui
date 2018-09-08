import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { css } from './styled-engine'
import { system } from './utils/styles'
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
      {({ checked, focused, disabled, input }) => (
        <Component
          className={classNames(className, {
            'sui-switch-disabled': disabled,
          })}
        >
          <input ref={ref} type="checkbox" {...input} />
          <div
            className={classNames('sui-switch-wrapper', {
              checked,
              focused,
              disabled,
            })}
          >
            <div className="sui-switch-content">
              <span className="sui-switch-label on">
                {labeled ? onLabel : ''}
              </span>
              <div className="sui-switch-ball" />
              <span className="sui-switch-label off">
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

      &.focused {
        ${mixin('controlFocus')};
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

      &.on {
        color: ${th('primary')};
      }

      &.off {
        color: ${th('gray900')};
      }
    }

    &&& .sui-switch-wrapper {
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
