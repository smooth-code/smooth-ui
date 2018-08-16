import React from 'react'
import InnerSwitch from './internal/InnerSwitch'
import createComponent from './internal/createComponent'

const Checkbox = createComponent(
  ({ css, mixin, th, classNames, PropTypes }) => ({
    name: 'checkbox',
    render: ({ Component, className, size, ...props }) => (
      <Component
        className={classNames(className, {
          'sui-checkbox-disabled': props.disabled,
          [`sui-checkbox-${size}`]: size,
        })}
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
      </Component>
    ),
    style: css`
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
          ${mixin('controlFocus')};
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
    `,
    propTypes: {
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      onChange: PropTypes.func,
      size: PropTypes.oneOf(['sm', 'lg']),
      value: PropTypes.string,
    },
  }),
)

export default Checkbox
