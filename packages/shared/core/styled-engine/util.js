/* eslint-disable no-underscore-dangle */
import React from 'react'

function patchStyledComponent(StyledComponent) {
  if (!StyledComponent.target.__smoothUIComponent) {
    return StyledComponent
  }

  const { render, withComponent: baseWithComponent } = StyledComponent

  StyledComponent.withComponent = (component, ...args) => {
    const Target = StyledComponent.target
    const NewTarget = props => <Target as={component} {...props} />
    // eslint-disable-next-line no-underscore-dangle
    NewTarget.__smoothUIComponent = true
    return patchStyledComponent(
      Object.assign(baseWithComponent(NewTarget, ...args), StyledComponent),
    )
  }

  StyledComponent.render = ({ as, ...props }, ref) =>
    render({ forwardedAs: as, ...props }, ref)

  return StyledComponent
}

function wrapCreateStyledComponent(createStyledComponent) {
  const { attrs, withConfig } = createStyledComponent
  const wrappedCreateStyledComponent = (...args) => {
    const StyledComponent = createStyledComponent(...args)
    return patchStyledComponent(StyledComponent)
  }
  wrappedCreateStyledComponent.attrs = (...args) =>
    wrapCreateStyledComponent(attrs(...args))
  wrappedCreateStyledComponent.withConfig = (...args) =>
    wrapCreateStyledComponent(withConfig(...args))
  return wrappedCreateStyledComponent
}

export function wrapStyled(styled) {
  const newStyled = component => wrapCreateStyledComponent(styled(component))
  Object.assign(newStyled, styled)
  return newStyled
}
