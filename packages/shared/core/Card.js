import React from 'react'
import { th, system } from '@xstyled/system'
import { node } from 'prop-desc'
import { css, createComponent, getSystemPropTypes } from './util'
import * as theme from './theme/common'

export const Card = createComponent({
  name: 'Card',
  render: ({ as: As = 'div', ...props }) => <As {...props} />,
  theme: [
    theme,
    {
      components: {
        Card: p => {
          return css`
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: ${th.color('white')(p)};
            background-clip: border-box;
            border: 0.0625rem solid;
            border-color: ${th.color('highlightBorder')(p)};
            border-radius: ${th.radius('base')(p)};
            font-family: ${th.font('base')(p)};

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
    ...getSystemPropTypes(system),
  },
})

export const CardBody = createComponent({
  name: 'CardBody',
  render: ({ as: As = 'div', ...props }) => <As {...props} />,
  theme: [
    theme,
    {
      components: {
        CardBody: p => {
          return css`
            flex: 1 1 auto;
            padding: 20rpx;

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
    ...getSystemPropTypes(system),
  },
})

export const CardTitle = createComponent({
  name: 'CardTitle',
  render: ({ as: As = 'div', ...props }) => <As {...props} />,
  theme: [
    theme,
    {
      components: {
        CardTitle: p => {
          return css`
            margin-bottom: 12rpx;

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
    ...getSystemPropTypes(system),
  },
})

export const CardText = createComponent({
  name: 'CardText',
  render: ({ as: As = 'p', ...props }) => <As {...props} />,
  theme: [
    theme,
    {
      components: {
        CardText: p => {
          return css`
            &:last-child {
              margin-bottom: 0;
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
    ...getSystemPropTypes(system),
  },
})

export const CardHeader = createComponent({
  name: 'CardHeader',
  render: ({ as: As = 'div', ...props }) => <As {...props} />,
  theme: [
    theme,
    {
      components: {
        CardHeader: p => {
          const baseRadius = th.radius('base')(p)
          return css`
            padding: 0.75rem 1.25rem;
            margin-bottom: 0; /* Removes the default margin-bottom of <hN> */
            background-color: ${th.color('highlightBackground')(p)};
            border-bottom: 0.0625rem;
            border-bottom-color: ${th.color('highlightBorder')(p)};

            &:first-child {
              border-radius: calc(${baseRadius} - 1px) calc(${baseRadius} - 1px)
                0 0;
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
    ...getSystemPropTypes(system),
  },
})

export const CardFooter = createComponent({
  name: 'CardFooter',
  render: ({ as: As = 'div', ...props }) => <As {...props} />,
  theme: [
    theme,
    {
      components: {
        CardFooter: p => {
          const baseRadius = th.radius('base')(p)
          return css`
            padding: 0.75rem 1.25rem;
            background-color: ${th.color('highlightBackground')(p)};
            border-top: 0.0625rem;
            border-top-color: ${th.color('highlightBorder')(p)};

            &:last-child {
              border-radius: 0 0 calc(${baseRadius} - 1px)
                calc(${baseRadius} - 1px);
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
    ...getSystemPropTypes(system),
  },
})

export const CardImg = createComponent({
  name: 'CardImg',
  render: ({ as: As = 'img', ...props }) => <As {...props} />,
  theme: [
    theme,
    {
      components: {
        CardImg: p => {
          const baseRadius = th.radius('base')(p)
          return css`
            flex-shrink: 0; /* For IE: https://github.com/twbs/bootstrap/issues/29396 */
            width: 100%; /* Required because we use flexbox and this inherently applies align-self: stretch */

            &:first-child {
              border-radius: calc(${baseRadius} - 1px) calc(${baseRadius} - 1px)
                0 0;
            }

            &:last-child {
              border-radius: 0 0 calc(${baseRadius} - 1px)
                calc(${baseRadius} - 1px);
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
    ...getSystemPropTypes(system),
  },
})
