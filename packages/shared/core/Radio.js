/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {
  Radio as ReakitRadio,
  RadioGroup as ReakitRadioGroup,
} from 'reakit/Radio'
import { th, system } from '@xstyled/system'
import { node, string, any, bool, oneOf } from 'prop-desc'
import * as theme from './theme/common'
import * as formTheme from './theme/form'
import {
  css,
  createComponent,
  getSystemPropTypes,
  SCALES,
  safeTransition,
} from './util'
import { useFormGroupControlProps } from './Form'

export { useRadioState } from 'reakit/Radio'

export const RadioGroup = createComponent({
  name: 'RadioGroup',
  render: props => {
    return <ReakitRadioGroup {...props} />
  },
  theme: {
    components: {
      RadioGroup: p => {
        return css`
          padding: 0;
          border: 0;

          &[aria-orientation='horizontal'] > [data-form-check] {
            display: inline-flex;
            margin-right: 1em;
          }

          && {
            ${system(p)}
          }
        `
      },
    },
  },
  propTypes: {
    children: node,
    'aria-orientation': oneOf(['vertical', 'horizontal']).desc(
      'Specify the orientation of the radio group.',
    ),
    ...getSystemPropTypes(system),
  },
})

const validationStyle = color => p =>
  css`
    &[aria-checked='true'] {
      border-color: ${color};
      background-color: ${color};
    }

    &:focus {
      border-color: ${color};
      ${p.theme.mixins.controlFocus(color)(p)};
    }
  `(p)

const noop = () => {}

const BaseRadio = React.forwardRef(function BaseRadio(
  { type, checked, disabled, id, name, value, ...props },
  ref,
) {
  const inputRef = React.useRef()
  const handleInputFocus = React.useCallback(() => {
    inputRef.current.parentElement.focus()
  }, [])
  return (
    <div ref={ref} {...props}>
      <input
        ref={inputRef}
        tabIndex={-1}
        type={type}
        checked={checked}
        disabled={disabled}
        id={id}
        onChange={noop}
        name={name}
        value={value}
        onFocus={handleInputFocus}
      />
      <div data-checkmark />
    </div>
  )
})

export const Radio = createComponent({
  name: 'Radio',
  render: ({ as = BaseRadio, ...props }) => {
    const controlProps = useFormGroupControlProps(props)
    return <ReakitRadio as={as} {...controlProps} />
  },
  theme: [
    theme,
    formTheme,
    {
      sizes: {
        radio: {
          container: {
            xs: '10rpx',
            sm: '12rpx',
            base: '16rpx',
            lg: '22rpx',
            xl: '28rpx',
          },
          checkmark: {
            xs: '6rpx',
            sm: '8rpx',
            base: '10rpx',
            lg: '14rpx',
            xl: '18rpx',
          },
        },
      },
      components: {
        Radio: p => {
          const scale = p.scale || 'base'
          const validColor = th.color('form.valid')(p)
          const invalidColor = th.color('form.invalid')(p)
          const containerSize = th.size(`radio.container.${scale}`)(p)
          const checkmarkSize = th.size(`radio.checkmark.${scale}`)(p)
          return css`
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: ${containerSize};
            height: ${containerSize};
            z-index: ${th.zIndex('control')(p)};
            background-color: ${th.color('formControl.background')(p)};
            border-radius: 50%;
            border-style: solid;
            border-width: ${th.borderWidth(`formControl.${scale}`)(p)};
            border-color: ${th.color('formControl.border')(p)};
            ${safeTransition('base')(p)};

            & > input {
              top: 0;
              left: 0;
              width: 100%;
              cursor: inherit;
              height: 100%;
              margin: 0;
              opacity: 0;
              padding: 0;
              position: absolute;
            }

            & > [data-checkmark] {
              height: ${checkmarkSize};
              width: ${checkmarkSize};
              pointer-events: none;
              transform: scale(0);
              transform-origin: center;
              border-radius: 50%;
              background-color: ${th.color('primary')(p)};
              ${safeTransition('base')(p)};
            }

            &[aria-checked='true'] > [data-checkmark] {
              transform: scale(1);
            }

            &:focus {
              ${p.theme.mixins.controlFocus(th.color('primary')(p))(p)};
            }

            &[aria-disabled] {
              opacity: 0.6;
            }

            &[aria-invalid='true'] {
              ${validationStyle(invalidColor)(p)};
            }

            &[aria-invalid='false'] {
              ${validationStyle(validColor)(p)};
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
    checked: bool.desc('Same as the `checked` attribute.'),
    disabled: bool.desc('Same as the HTML attribute.'),
    focusable: bool.desc(
      'When an element is `disabled`, it may still be `focusable`. It works similarly to `readOnly` on form elements. In this case, only `aria-disabled` will be set.',
    ),
    stopId: string.desc('Element ID.'),
    value: any.desc('Same as the value attribute.'),
    scale: oneOf(SCALES),
    ...getSystemPropTypes(system),
  },
})
