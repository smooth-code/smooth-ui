import React from 'react'
import InnerSwitch from './internal/InnerSwitch'
import createComponent from './internal/createComponent'

const Switch = createComponent(({ css, mixin, th, classNames, PropTypes }) => ({
  name: 'switch',
  render: ({ Component, className, labeled, ...props }) => (
    <Component
      className={classNames(className, {
        'sui-switch-disabled': props.disabled,
      })}
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
              <span className="sui-switch-label off">
                {labeled ? 'OFF' : ''}
              </span>
            </div>
          </div>
        )}
      </InnerSwitch>
    </Component>
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
      transition: ${th('transitionBase')};

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
  `,
  propTypes: {
    /** Add ON/OFF labels. */
    labeled: PropTypes.bool,
  },
}))

export default Switch
