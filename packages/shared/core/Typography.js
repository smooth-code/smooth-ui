import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import {
  headingsMarginBottom,
  headingsFontWeight,
  headingsLineHeight,
  headingsColor,
  headingsFontFamily,
  h1FontSize,
  h2FontSize,
  h3FontSize,
  h4FontSize,
  h5FontSize,
  h6FontSize,
  display1Size,
  display1Weight,
  display2Size,
  display2Weight,
  display3Size,
  display3Weight,
  display4Size,
  display4Weight,
  displayLineHeight,
} from './theming/index'
import createComponent from './createComponent'

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

const commonHeadingStyle = p => {
  const fontFamily = headingsFontFamily(p)
  return css`
    margin-top: 0;
    margin-bottom: ${headingsMarginBottom(p)};
    font-weight: ${headingsFontWeight(p)};
    line-height: ${headingsLineHeight(p)};
    color: ${headingsColor(p)};
    ${fontFamily && `font-family: ${fontFamily}`};
  `
}

const variantStyle = {
  h1: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${h1FontSize(p)};
  `,
  h2: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${h2FontSize(p)};
  `,
  h3: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${h3FontSize(p)};
  `,
  h4: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${h4FontSize(p)};
  `,
  h5: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${h5FontSize(p)};
  `,
  h6: p => css`
    ${commonHeadingStyle(p)};
    font-size: ${h6FontSize(p)};
  `,
  'display-1': p => css`
    ${commonHeadingStyle(p)};
    font-size: ${display1Size(p)};
    font-weight: ${display1Weight(p)};
    line-height: ${displayLineHeight(p)};
  `,
  'display-2': p => css`
    ${commonHeadingStyle(p)};
    font-size: ${display2Size(p)};
    font-weight: ${display2Weight(p)};
    line-height: ${displayLineHeight(p)};
  `,
  'display-3': p => css`
    ${commonHeadingStyle(p)};
    font-size: ${display3Size(p)};
    font-weight: ${display3Weight(p)};
    line-height: ${displayLineHeight(p)};
  `,
  'display-4': p => css`
    ${commonHeadingStyle(p)};
    font-size: ${display4Size(p)};
    font-weight: ${display4Weight(p)};
    line-height: ${displayLineHeight(p)};
  `,
}

const Typography = createComponent(() => ({
  name: 'typo',
  defaultComponent: null,
  render: ({ className, Component: BaseComponent, variant, ...props }) => {
    const Component = BaseComponent || variantTags[variant] || 'span'
    return <Component className={className} {...props} />
  },
  style: p => css`
    ${p.variant && variantStyle[p.variant] && variantStyle[p.variant](p)};
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
