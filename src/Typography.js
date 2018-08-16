import React from 'react'
import createComponent from './internal/createComponent'

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

const Typography = createComponent(({ css, th, classNames, PropTypes }) => ({
  name: 'typo',
  defaultComponent: null,
  render: ({
    className,
    Component: BaseComponent,
    margin,
    variant,
    ...props
  }) => {
    const Component = BaseComponent || variantTags[variant] || 'span'
    return (
      <Component
        className={classNames(className, `sui-typo-${variant}`)}
        {...props}
      />
    )
  },
  style: css`
    &.sui-typo-h1,
    &.sui-typo-h2,
    &.sui-typo-h3,
    &.sui-typo-h4,
    &.sui-typo-h5,
    &.sui-typo-h6,
    &.sui-typo-display-1,
    &.sui-typo-display-2,
    &.sui-typo-display-3,
    &.sui-typo-display-4 {
      margin-top: 0;
      margin-bottom: ${th('headingsMarginBottom')};
      font-weight: ${th('headingsFontWeight')};
      line-height: ${th('headingsLineHeight')};
      color: ${th('headingsColor')};
      ${th(
        'headingsFontFamily',
        font => (font ? `font-family: ${font};` : null),
      )};

      ${props => props.margin === false && 'margin-bottom: 0;'};
    }

    &.sui-typo-h1 {
      font-size: ${th('h1FontSize')};
    }

    &.sui-typo-h2 {
      font-size: ${th('h2FontSize')};
    }

    &.sui-typo-h3 {
      font-size: ${th('h3FontSize')};
    }

    &.sui-typo-h4 {
      font-size: ${th('h4FontSize')};
    }

    &.sui-typo-h5 {
      font-size: ${th('h5FontSize')};
    }

    &.sui-typo-h6 {
      font-size: ${th('h6FontSize')};
    }

    &.sui-typo-display-1 {
      font-size: ${th('display1Size')};
      font-weight: ${th('display1Weight')};
      line-height: ${th('displayLineHeight')};
    }

    &.sui-typo-display-2 {
      font-size: ${th('display2Size')};
      font-weight: ${th('display2Weight')};
      line-height: ${th('displayLineHeight')};
    }

    &.sui-typo-display-3 {
      font-size: ${th('display3Size')};
      font-weight: ${th('display3Weight')};
      line-height: ${th('displayLineHeight')};
    }

    &.sui-typo-display-4 {
      font-size: ${th('display4Size')};
      font-weight: ${th('display4Weight')};
      line-height: ${th('displayLineHeight')};
    }
  `,
  propTypes: {
    children: PropTypes.node,
    margin: PropTypes.bool,
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
  defaultProps: {
    margin: true,
  },
}))

export default Typography
