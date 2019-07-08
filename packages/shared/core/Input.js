/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { th, system } from '@xstyled/system'
import { node, bool, oneOf } from 'prop-desc'
import * as theme from './theme/common'
import * as formTheme from './theme/form'
import {
  css,
  SCALES,
  createComponent,
  getSystemPropTypes,
  safeTransition,
} from './util'
import { useFormControlProps } from './Form'

const validationStyle = color => p =>
  css`
    border-color: ${color};

    &:focus {
      border-color: ${color};
      ${p.theme.mixins.controlFocus(color)(p)}
    }
  `(p)

export const Input = createComponent({
  name: 'Input',
  render: ({ as: As = 'input', ...props }) => {
    const controlProps = useFormControlProps(props)
    return <As {...controlProps} />
  },
  theme: [
    theme,
    formTheme,
    {
      components: {
        Input: p => {
          const scale = p.scale || 'base'
          const px = th.space(`textFormControl.x.${scale}`)(p)
          const py = th.space(`textFormControl.y.${scale}`)(p)
          const validColor = th.color('form.valid')(p)
          const invalidColor = th.color('form.invalid')(p)
          return css`
            display: block;
            appearance: none;
            width: 100%;
            z-index: ${th.zIndex('control')(p)};
            font-family: ${th.font('base')(p)};
            font-size: ${th.fontSize(scale)(p)};
            border-width: ${th.borderWidth(`formControl.${scale}`)(p)};
            border-color: ${th.color('formControl.border')(p)};
            border-style: solid;
            line-height: ${th.lineHeight(`formControl.${scale}`)(p)};
            color: ${th.color('formControl.text')(p)};
            background-color: ${th.color('formControl.background')(p)};
            padding: ${py} ${px};
            line-height: ${th.lineHeight(`button.${scale}`)(p)};
            border-radius: ${th.radius(scale)(p)};
            ${safeTransition('base')(p)};

            &[type='number'] {
              padding-right: 6rpx;
            }

            &::placeholder {
              color: ${th.color('formControl.placeholder')(p)};
            }

            &:disabled {
              background-color: ${th.color('formControl.disabled.background')(
                p,
              )};
              color: ${th.color('formControl.disabled.text')(p)};
            }

            &:focus {
              ${p.theme.mixins.controlFocus(th.color('primary')(p))(p)}
            }

            &[aria-invalid='true'] {
              ${validationStyle(invalidColor)(p)};
            }

            &[aria-invalid='false'] {
              ${validationStyle(validColor)(p)};
            }

            && {
              ${system(p)};
            }
          `
        },
      },
    },
  ],
  propTypes: {
    children: node,
    disabled: bool,
    scale: oneOf(SCALES),
    ...getSystemPropTypes(system),
  },
})
