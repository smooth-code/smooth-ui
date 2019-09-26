/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { lighten } from 'polished'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { th, system } from '@xstyled/system'
import { func, bool, oneOf } from 'prop-desc'
import * as theme from './theme/common'
import * as formTheme from './theme/form'
import {
  css,
  SCALES,
  createComponent,
  getSystemPropTypes,
  safeTransition,
} from './util'
import { useFormGroupControlProps } from './Form'

const noop = () => {}

const BaseSwitch = React.forwardRef(function BaseSwitch(
  {
    labeled,
    onLabel = 'ON',
    offLabel = 'OFF',
    type,
    checked,
    disabled,
    id,
    name,
    value,
    ...props
  },
  ref,
) {
  const inputRef = React.useRef()
  const handleInputFocus = React.useCallback(() => {
    inputRef.current.parentElement.focus()
  }, [])
  return (
    <div ref={ref} {...props}>
      <div data-switch-content>
        {labeled && <div data-switch-label="on">{onLabel}</div>}
        <div data-switch-ball />
        {labeled && <div data-switch-label="off">{offLabel}</div>}
      </div>
      <input
        ref={inputRef}
        tabIndex={-1}
        type={type}
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        value={value}
        onChange={noop}
        onFocus={handleInputFocus}
      />
    </div>
  )
})

export const Switch = createComponent({
  name: 'Switch',
  render: ({ as = BaseSwitch, scale, ...props }) => {
    const controlProps = useFormGroupControlProps(props)
    return <ReakitCheckbox as={as} {...controlProps} />
  },
  theme: [
    theme,
    formTheme,
    {
      fontSizes: {
        switch: {
          xs: '2rpx',
          sm: '5rpx',
          base: '9rpx',
          lg: '12rpx',
          xl: '18rpx',
        },
      },
      sizes: {
        switch: {
          container: {
            width: {
              xs: '24rpx',
              sm: '32rpx',
              base: '48rpx',
              lg: '72rpx',
              xl: '108rpx',
            },
            height: {
              xs: '12rpx',
              sm: '16rpx',
              base: '24rpx',
              lg: '36rpx',
              xl: '54rpx',
            },
            ball: {
              xs: '8rpx',
              sm: '12rpx',
              base: '18rpx',
              lg: '28rpx',
              xl: '40rpx',
            },
          },
        },
      },
      components: {
        Switch: p => {
          const scale = p.scale || 'base'
          const width = th.size(`switch.container.width.${scale}`)(p)
          const height = th.size(`switch.container.height.${scale}`)(p)
          const ballSize = th.size(`switch.container.ball.${scale}`)(p)
          return css`
            display: inline-block;
            position: relative;
            z-index: ${th.zIndex('control')(p)};
            font-family: ${th.font('base')(p)};
            border-radius: ${th.radius('34rpx')(p)};
            width: ${width};
            height: ${height};
            background-color: ${th.color('light300')(p)};
            overflow: hidden;
            cursor: pointer;
            border-width: ${th.borderWidth(`formControl.base`)(p)};
            border-color: ${th.color('formControl.border')(p)};
            border-style: solid;
            font-size: ${th.fontSize(`switch.${scale}`)(p)};
            font-weight: ${th.fontWeight('extraBold')(p)};
            ${safeTransition('base')(p)};

            input {
              top: 0;
              left: 0;
              width: 100%;
              cursor: inherit;
              height: 100%;
              margin: 0;
              opacity: 0;
              padding: 0;
              position: absolute;
              z-index: 1;
            }

            [data-switch-content] {
              display: flex;
              align-items: center;
              height: 100%;
              pointer-events: none;
              ${safeTransition('base')(p)};
            }

            [data-switch-ball] {
              flex-shrink: 0;
              background-color: ${th.color('light500')(p)};
              border-radius: 50%;
              width: ${ballSize};
              height: ${ballSize};
              margin: 0 6%;
              ${safeTransition('base')(p)};
            }

            [data-switch-label] {
              position: absolute;
              width: calc(${width} / 2);
              text-align: center;
              line-height: ${height};
              user-select: none;
              overflow: hidden;
            }

            [data-switch-label='on'] {
              left: -50%;
              color: ${th.color('primary')(p)};
            }

            [data-switch-label='off'] {
              right: 0;
              color: ${th.color('gray900')(p)};
            }

            &:focus {
              ${p.theme.mixins.controlFocus(th.color('primary')(p))(p)};
            }

            &[aria-checked='true'] {
              background-color: ${lighten(0.3, th.color('primary')(p))};
              border-color: transparent;

              [data-switch-content] {
                transform: translateX(calc(${width} - ${ballSize} - 12%));
              }

              [data-switch-ball] {
                background-color: ${th.color('primary')(p)};
              }
            }

            &[aria-disabled='true'] {
              opacity: 0.6;
            }

            && {
              ${system(p)}
            }
          `
        },
      },
    },
  ],
  propTypes: {
    checked: bool.desc(
      "Checkbox's checked state. If present, it's used instead of state.",
    ),
    disabled: bool.desc('Same as the HTML attribute.'),
    focusable: bool.desc(
      'When an element is `disabled`, it may still be `focusable`. It works similarly to `readOnly` on form elements. In this case, only `aria-disabled` will be set.',
    ),
    onChange: func.desc('Same as the "checkbox" `onChange` prop.'),
    scale: oneOf(SCALES)
      .desc('Control the size of the component.')
      .defaultTo('base'),
    ...getSystemPropTypes(system),
  },
})
