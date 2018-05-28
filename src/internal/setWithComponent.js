/* eslint-disable no-param-reassign */
import React from 'react'

const setWithComponent = (StyledComponent, BaseComponent) => {
  // Patch extend
  const originalExtend = StyledComponent.extend.bind(StyledComponent)
  Object.defineProperty(StyledComponent, 'extend', {
    get() {
      return (...args) => {
        const NewStyledComponent = originalExtend(...args)
        setWithComponent(NewStyledComponent, BaseComponent)
        return NewStyledComponent
      }
    },
  })

  // Patch withComponent
  const originalWithComponent = StyledComponent.withComponent.bind(
    StyledComponent,
  )
  StyledComponent.withComponent = component => {
    const NewStyledComponent = originalWithComponent(props => (
      <BaseComponent component={component} {...props} />
    ))

    setWithComponent(NewStyledComponent, BaseComponent)
    return NewStyledComponent
  }
}

export default setWithComponent
