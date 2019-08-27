import React from 'react'
import { darken } from 'polished'
import { th, system } from '@xstyled/system'
import { node, oneOf, string, oneOfType } from 'prop-desc'
import {
  css,
  createComponent,
  getSystemPropTypes,
  VARIANTS,
  colorLevel,
} from './util'
import * as theme from './theme/common'

export const Alert = createComponent({
  name: 'Alert',
  render: ({ as: As = 'p', ...props }) => <As role="alert" {...props} />,
  theme: [
    theme,
    {
      colorLevels: {
        Alert: {
          color: 6,
          backgroundColor: -10,
          borderColor: -9,
        },
      },
      components: {
        Alert: p => {
          const baseColor =
            p.variant === null ? null : th.color(p.variant || 'primary')(p)
          const textColorLevel = th('colorLevels.Alert.color')(p)
          const backgroundColorLevel = th('colorLevels.Alert.backgroundColor')(
            p,
          )
          const borderColorLevel = th('colorLevels.Alert.borderColor')(p)
          const color = colorLevel(baseColor, textColorLevel)(p)
          const backgroundColor = colorLevel(baseColor, backgroundColorLevel)(p)
          const borderColor = colorLevel(baseColor, borderColorLevel)(p)
          const hrColor = darken(0.05, color)
          return css`
            font-family: ${th.font('base')(p)};
            position: relative;
            padding: 12rpx 20rpx;
            margin-bottom: 16rpx;
            border: 1rpx;
            border-color: transparent;
            border-radius: ${th.radius('base')(p)};
            color: ${color};
            background-color: ${backgroundColor};
            border-color: ${borderColor};

            hr {
              border-top-color: ${hrColor};
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
    children: node,
    variant: oneOfType([oneOf(VARIANTS), string])
      .defaultTo('primary')
      .desc('Control the color variant of the component.'),
    ...getSystemPropTypes(system),
  },
})
