import React from 'react'

const getWithComponent = (StyledComponent, BaseComponent) => {
  const originalWithComponent = StyledComponent.withComponent.bind(
    StyledComponent,
  )

  const withComponent = component => {
    const NewStyledComponent = originalWithComponent(props => (
      <BaseComponent component={component} {...props} />
    ))
    NewStyledComponent.withComponent = withComponent
    return NewStyledComponent
  }

  return withComponent
}

export default getWithComponent
