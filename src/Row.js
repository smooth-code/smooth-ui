import React from 'react'
import createComponent from './internal/createComponent'

const Row = createComponent(({ css, resolveUnit, PropTypes }) => ({
  name: 'row',
  render: ({ Component, gutter, ...props }) => <Component {...props} />,
  style: css`
    flex-grow: 1;
    flex-wrap: wrap;
    display: flex;
    margin-right: -${props => resolveUnit(props.gutter)};
    margin-left: -${props => resolveUnit(props.gutter)};

    > .sui-col {
      padding-left: ${props => resolveUnit(props.gutter)};
      padding-right: ${props => resolveUnit(props.gutter)};
    }
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default Row
