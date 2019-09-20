import React from 'react'
import { system } from '@xstyled/system'
import { Separator as ReakitSeparator } from 'reakit'
import { node, oneOf } from 'prop-desc'
import { css, createComponent, getSystemPropTypes } from './util'
import * as theme from './theme/common'

export const Separator = createComponent({
  name: 'Separator',
  render: props => <ReakitSeparator {...props} />,
  theme: [
    theme,
    {
      components: {
        Separator: p => {
          return css`
            border: 0;
            border-top: 0.0625rem solid rgba(0, 0, 0, 0.125);

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
    orientation: oneOf(['horizontal', 'vertical']),
    ...getSystemPropTypes(system),
  },
})
