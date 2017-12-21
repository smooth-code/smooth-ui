import React, { Component } from 'react'
import getDisplayName from 'recompact/getDisplayName'
import isClassComponent from 'recompact/isClassComponent'

const handleRef = BaseComponent => {
  if (isClassComponent(BaseComponent)) {
    return BaseComponent
  }

  class ToClass extends Component {
    render() {
      const { baseRef: ref, ...props } = this.props
      const refProps = { ref, ...props }

      if (typeof BaseComponent === 'string') {
        return <BaseComponent {...refProps} />
      }

      return BaseComponent(refProps, this.context)
    }
  }

  ToClass.displayName = getDisplayName(BaseComponent)

  return ToClass
}

export default handleRef
