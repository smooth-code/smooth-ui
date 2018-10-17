function patchStyledComponent(StyledComponent, defaultAs) {
  const { render } = StyledComponent
  StyledComponent.withComponent = component =>
    patchStyledComponent({ ...StyledComponent }, component)
  StyledComponent.render = ({ as = defaultAs, ...props }, ref) =>
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
  return component => wrapCreateStyledComponent(styled(component))
}
