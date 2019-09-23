/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { node, number, string, oneOfType, oneOf } from 'prop-desc'
import mergeRefs from 'react-merge-refs'
import { th, compose, space, typography } from '@xstyled/system'
import { css, createComponent, getSystemPropTypes } from './util'
import * as theme from './theme/common'

function ellipsis({ lines = Infinity }) {
  if (lines === Infinity) return null
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
  `
}

const system = compose(
  space,
  typography,
)

export const TEXT_VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'display-1',
  'display-2',
  'display-3',
  'display-4',
]

export const Text = createComponent({
  name: 'Text',
  render: (
    { as: asProp, ref, lines = Infinity, ...props },
    { theme, variant },
  ) => {
    const variantConfig = variant ? theme.texts[variant] : null
    const As = asProp || ((variantConfig && variantConfig.defaultAs) || 'span')
    const localRef = React.useRef()
    const [height, setHeight] = React.useState(null)
    React.useLayoutEffect(() => {
      if (!window.getComputedStyle || lines === Infinity) return
      const style = window.getComputedStyle(localRef.current)
      const lineHeight = parseInt(style.lineHeight, 10)
      const height = (lineHeight / 16) * lines
      setHeight(`${height}rem`)
    }, [lines])
    return (
      <As
        ref={mergeRefs([ref, localRef])}
        style={{ height, ...props.style }}
        {...props}
      />
    )
  },
  theme: [
    theme,
    {
      texts: {
        h1: {
          defaultAs: 'h1',
          style: css`
            font-weight: bold;
            font-size: 2.5rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        h2: {
          defaultAs: 'h2',
          style: css`
            font-weight: 600;
            font-size: 2rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        h3: {
          defaultAs: 'h3',
          style: css`
            font-weight: 600;
            font-size: 1.75rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        h4: {
          defaultAs: 'h4',
          style: css`
            font-weight: 600;
            font-size: 1.5rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        h5: {
          defaultAs: 'h5',
          style: css`
            font-weight: 600;
            font-size: 1.25rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        h6: {
          defaultAs: 'h6',
          style: css`
            font-weight: 600;
            font-size: 1rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        'display-1': {
          defaultAs: 'h1',
          style: css`
            font-weight: 300;
            font-size: 6rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        'display-2': {
          defaultAs: 'h2',
          style: css`
            font-weight: 300;
            font-size: 5.5rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        'display-3': {
          defaultAs: 'h3',
          style: css`
            font-weight: 300;
            font-size: 4.4rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
        'display-4': {
          defaultAs: 'h4',
          style: css`
            font-weight: 300;
            font-size: 3.5rem;
            margin-top: 0;
            margin-bottom: 0.4em;
          `,
        },
      },
      components: {
        Text: p => {
          const variantConfig = p.variant ? p.theme.texts[p.variant] : null
          return css`
            font-family: ${th.font('base')(p)};
            ${ellipsis(p)}
            ${variantConfig ? variantConfig.style : null}

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
    lines: number.desc('Control the number of lines to display'),
    variants: oneOfType([oneOf(TEXT_VARIANTS), string])
      .defaultTo('primary')
      .desc('Control the color variant of the component.'),
    ...getSystemPropTypes(system),
  },
})
