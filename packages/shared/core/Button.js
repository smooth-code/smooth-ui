import React from 'react'
import { darken } from 'polished'
import { Button as ReakitButton } from 'reakit/Button'
import { th, system } from '@xstyled/system'
import { node, bool, oneOf, string, oneOfType } from 'prop-desc'
import * as theme from './theme/common'
import * as formTheme from './theme/form'
import {
  css,
  SCALES,
  VARIANTS,
  createComponent,
  getSystemPropTypes,
  colorYik,
  safeTransition,
} from './util'

export const Button = createComponent({
  name: 'Button',
  render: props => {
    return <ReakitButton {...props} />
  },
  theme: [
    theme,
    formTheme,
    {
      borderWidths: {
        button: SCALES.reduce((obj, scale) => {
          obj[scale] = 0
          return obj
        }, {}),
      },
      components: {
        Button: p => {
          const scale = p.scale || 'base'
          const baseColor =
            p.variant === null ? null : th.color(p.variant || 'primary')(p)
          const px = th.space(`textFormControl.x.${scale}`)(p)
          const py = th.space(`textFormControl.y.${scale}`)(p)
          return css`
            display: inline-block;
            z-index: ${th.zIndex('control')(p)};
            font-family: ${th.font('base')(p)};
            font-size: ${th.fontSize(scale)(p)};
            padding: ${py} ${px};
            border-radius: ${th.radius(scale)(p)};
            line-height: ${th.lineHeight(`formControl.${scale}`)(p)};
            border-width: ${th.borderWidth(`button.${scale}`)(p)};
            cursor: ${p.disabled ? 'initial' : 'pointer'};
            ${safeTransition('base')(p)};

            /* When used as link */
            text-decoration: none;

            &:disabled {
              opacity: 0.8;
            }

            ${baseColor &&
              css`
                color: ${colorYik(baseColor)(p)};
                background-color: ${baseColor};

                &:focus {
                  ${p.theme.mixins.controlFocus(baseColor)(p)};
                }

                &:not(:disabled):hover,
                &:not(:disabled):active {
                  background-color: ${darken(0.05, baseColor)};
                }
              `(p)}

            && {
              ${system(p)}
            }
          `
        },
      },
    },
  ],
  propTypes: {
    children: node,
    disabled: bool.desc('Same as the HTML attribute.'),
    focusable: bool.desc(
      'When an element is `disabled`, it may still be `focusable`. It works similarly to `readOnly` on form elements. In this case, only `aria-disabled` will be set.',
    ),
    scale: oneOf(SCALES).desc('Control the size of the component.'),
    variant: oneOfType([oneOf(VARIANTS), string])
      .defaultTo('primary')
      .desc('Control the color variant of the component.'),
    ...getSystemPropTypes(system),
  },
})
