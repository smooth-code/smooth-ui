import React from 'react'
import PropTypes from 'prop-types'
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
    return {
      flexGrow: 1,
      flexWrap: 'wrap',
      display: 'flex',
      marginLeft: `-${gutter}`,
      marginRight: `-${gutter}`,
    }
  },
  propTypes: {
    children: PropTypes.node,
    gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  },
  defaultProps: {
    gutter: 15,
  },
}))

export default Row
