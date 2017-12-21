/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import wrapDisplayName from 'recompact/wrapDisplayName'

const pure = Component =>
  class Pure extends React.PureComponent {
    static displayName = wrapDisplayName(Component, 'pure')

    render() {
      return <Component {...this.props} />
    }
  }

export default pure
