import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import {
  dimensions,
  space,
  flexboxes,
  basics,
  backgrounds,
  positions,
  borders,
} from './utils/styles'
import composeStyles from './utils/composeStyles'
import SwitchState from './SwitchState'
import createComponent from './utils/createComponent'

const containerSystem = composeStyles(
  basics,
  dimensions,
  space,
  flexboxes,
  positions,
)

const contentSystem = composeStyles(dimensions, backgrounds, borders)

const Checkbox = createComponent(() => ({
  name: 'checkbox',
  system: composeStyles(containerSystem, contentSystem),
  applySystem: null,
  render: ({ Component, ref, className, size, ...props }) => (
    <SwitchState {...props}>
      {({ checked, focused, disabled, input }) => (
        <Component
          className={classNames(className, {
            'sui-checkbox-disabled': props.disabled,
            [`sui-checkbox-${size}`]: size,
          })}
        >
          <input ref={ref} type="checkbox" {...input} />
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
        </Component>
      )}
    </SwitchState>
  ),
  style: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
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
      ${th('transitionBase')};

      &.checked {
        background-color: ${th('primary')};
        border-color: transparent;

        svg {
          transform: scale(1);
        }
      }

      &.focused {
        ${mixin('controlFocus')};
      }

      &.disabled {
        background-color: ${th('inputDisabledBgColor')};
      }
    }

    svg {
      width: 80%;
      pointer-events: none;
      transform: scale(0);
      ${th('transitionBase')};
    }

    &.sui-checkbox-sm {
      .sui-checkbox-content {
        border-radius: ${th('borderRadiusSm')};
        width: 0.875rem;
        height: 0.875rem;
      }
    }

    &.sui-checkbox-lg {
      .sui-checkbox-content {
        border-radius: ${th('borderRadiusLg')};
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    &&& {
      ${containerSystem};

      .sui-checkbox-content {
        ${contentSystem};
      }
    }
  `,
  propTypes: {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'lg']),
    value: PropTypes.string,
  },
}))

export default Checkbox
