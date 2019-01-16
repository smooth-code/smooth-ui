import React from 'react'
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { px, prop } from './utils/system'
import createComponent from './utils/createComponent'

const Row = createComponent(() => ({
  name: 'row',
  injectTheme: true,
  render: ({
    Component,
    gutter,
    className,
    justifyContent,
    theme,
    ...props
  }) => <Component className={className} {...props} />,
  style: p => {
    const gutter = px(prop('gutter', 'gridGutter')(p))
    return css`
      box-sizing: border-box;
      flex-grow: 1;
      flex-wrap: wrap;
      display: flex;
      margin-left: -${gutter};
      margin-right: -${gutter};
    `
  },
  propTypes: {
    children: PropTypes.node,
    gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  },
}))

export default Row
