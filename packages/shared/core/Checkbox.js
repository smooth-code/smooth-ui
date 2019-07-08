/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { th, system } from '@xstyled/system'
import { func, bool, oneOf, node } from 'prop-desc'
import * as theme from './theme/common'
import * as formTheme from './theme/form'
import {
  css,
  SCALES,
  safeTransition,
  createComponent,
  getSystemPropTypes,
} from './util'
import { useFormGroupControlProps } from './Form'

export { useCheckboxState } from 'reakit/Checkbox'

export const CheckboxGroup = createComponent({
  name: 'CheckboxGroup',
  render: ({ as: As = 'fieldset', ...props }) => {
    return <As role="group" {...props} />
  },
  theme: {
    components: {
      CheckboxGroup: p => {
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
      'Specify the orientation of the checkbox group.',
    ),
    ...getSystemPropTypes(system),
  },
})

const validationStyle = color => p => {
  return css`
    &[aria-checked='true'] {
      border-color: ${color};
      background-color: ${color};
    }

    &:focus {
      border-color: ${color};
      ${p.theme.mixins.controlFocus(color)(p)};
    }
  `(p)
}

const noop = () => {}

const BaseCheckbox = React.forwardRef(function BaseCheckbox(
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
        name={name}
        value={value}
        onChange={noop}
        onFocus={handleInputFocus}
      />
      <svg data-checkmark viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
        />
      </svg>
    </div>
  )
})

export const Checkbox = createComponent({
  name: 'Checkbox',
  render: ({ as = BaseCheckbox, ...props }) => {
    const controlProps = useFormGroupControlProps(props)
    return <ReakitCheckbox as={as} {...controlProps} />
  },
  theme: [
    theme,
    formTheme,
    {
      sizes: {
        checkbox: {
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
        Checkbox: p => {
          const scale = p.scale || 'base'
          const validColor = th.color('form.valid')(p)
          const invalidColor = th.color('form.invalid')(p)
          const containerSize = th.size(`checkbox.container.${scale}`)(p)
          const checkmarkSize = th.size(`checkbox.checkmark.${scale}`)(p)
          return css`
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: ${containerSize};
            height: ${containerSize};
            z-index: ${th.zIndex('control')(p)};
            background-color: ${th.color('formControl.background')(p)};
            border-radius: ${th.radius(scale)(p)};
            border-style: solid;
            border-width: ${th.borderWidth(`formControl.${scale}`)(p)};
            border-color: ${th.color('formControl.border')(p)};
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
            }

            [data-checkmark] {
              height: ${checkmarkSize};
              width: ${checkmarkSize};
              pointer-events: none;
              transform: scale(0);
              transform-origin: center;
              color: ${th.color('white')(p)};
              ${safeTransition('base')(p)};
            }

            &[aria-checked='true'] {
              background-color: ${th.color('primary')(p)};
              border-color: transparent;

              > svg {
                transform: scale(1);
              }
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
