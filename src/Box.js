import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import createComponent from './internal/createComponent'

const addProp = (propName, attribute, transform = x => x) => props =>
  typeof props[propName] !== 'undefined'
    ? css`
        ${attribute || propName}: ${transform(props[propName])};
      `
    : null

const Box = createComponent(() => ({
  name: 'box',
  render: ({
    Component,
    flex,
    direction,
    wrap,
    alignItems,
    alignContent,
    alignSelf,
    justifyContent,
    padding,
    margin,
    ...props
  }) => <Component {...props} />,
  style: css`
    display: flex;

    ${addProp('flex', 'flex', flex => (flex === true ? 1 : flex))};
    ${addProp('direction', 'flex-direction')};
    ${addProp('wrap', 'flex-wrap')};
    ${addProp('alignItems', 'align-items')};
    ${addProp('alignContent', 'align-content')};
    ${addProp('alignSelf', 'align-self')};
    ${addProp('justifyContent', 'justify-content')};
    ${addProp('padding')};
    ${addProp('margin')};
  `,
  propTypes: {
    alignContent: PropTypes.string,
    alignItems: PropTypes.string,
    alignSelf: PropTypes.string,
    children: PropTypes.node,
    direction: PropTypes.string,
    flex: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    justifyContent: PropTypes.string,
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wrap: PropTypes.string,
  },
}))

export default Box
