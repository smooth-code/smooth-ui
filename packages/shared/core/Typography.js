import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { th } from './utils/system'
import createComponent from './utils/createComponent'

const variantTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'display-1': 'h1',
  'display-2': 'h2',
  'display-3': 'h3',
  'display-4': 'h4',
}

const commonHeadingStyle = css`
  margin-top: 0;
  margin-bottom: ${th('headingsMarginBottom')};
  font-weight: ${th('headingsFontWeight')};
  line-height: ${th('headingsLineHeight')};
  color: ${th('headingsColor')};
  ${th('headingsFontFamily', font => (font ? `font-family: ${font};` : null))};
`

const variantStyle = {
  h1: css`
    ${commonHeadingStyle};
    font-size: ${th('h1FontSize')};
  `,
  h2: css`
    ${commonHeadingStyle};
    font-size: ${th('h2FontSize')};
  `,
  h3: css`
    ${commonHeadingStyle};
    font-size: ${th('h3FontSize')};
  `,
  h4: css`
    ${commonHeadingStyle};
    font-size: ${th('h4FontSize')};
  `,
  h5: css`
    ${commonHeadingStyle};
    font-size: ${th('h5FontSize')};
  `,
  h6: css`
    ${commonHeadingStyle};
    font-size: ${th('h6FontSize')};
  `,
  'display-1': css`
    ${commonHeadingStyle};
    font-size: ${th('display1Size')};
    font-weight: ${th('display1Weight')};
    line-height: ${th('displayLineHeight')};
  `,
  'display-2': css`
    ${commonHeadingStyle};
    font-size: ${th('display2Size')};
    font-weight: ${th('display2Weight')};
    line-height: ${th('displayLineHeight')};
  `,
  'display-3': css`
    ${commonHeadingStyle};
    font-size: ${th('display3Size')};
    font-weight: ${th('display3Weight')};
    line-height: ${th('displayLineHeight')};
  `,
  'display-4': css`
    ${commonHeadingStyle};
    font-size: ${th('display4Size')};
    font-weight: ${th('display4Weight')};
    line-height: ${th('displayLineHeight')};
  `,
}

const Typography = createComponent(() => ({
  name: 'typo',
  defaultComponent: null,
  render: ({ className, Component: BaseComponent, variant, ...props }) => {
    const Component = BaseComponent || variantTags[variant] || 'span'
    return <Component className={className} {...props} />
  },
  style: css`
    ${p => p.variant && variantStyle[p.variant]};
  `,
  propTypes: {
    children: PropTypes.node,
    variant: PropTypes.oneOf([
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
    ]),
  },
}))

export default Typography
