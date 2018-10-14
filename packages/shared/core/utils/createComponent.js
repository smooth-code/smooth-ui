/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { patchStyledAPI, withTheme } from '../styled-engine'
import * as theme from '../theme'
import { omit } from './misc'
import { system as allSystem } from './styles'

function createComponent(getConfig) {
  const {
    name,
    style,
    omitProps = [],
    defaultProps = {},
    propTypes = {},
    render = ({ Component, ...props }) => <Component {...props} />,
    defaultComponent = 'div',
    system = allSystem,
    applySystem = system => props => system(props),
    injectTheme,
    InnerComponent: InnerComponentFromConfig,
  } = getConfig()

  const omittedProps = [
    'theme',
    ...(system ? system.meta.props : {}),
    ...omitProps,
  ]

  const baseClassName = `sui-${name}`
  let InnerComponent =
    InnerComponentFromConfig ||
    class Component extends React.PureComponent {
      render() {
        const {
          className,
          as,
          component,
          theme,
          baseRef,
          ...props
        } = this.props

        const Component = as || component || defaultComponent

        if (component && process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn(
            'Smooth UI: "component" prop is deprecated and will be removed in v6, please use "as" instead.',
          )
        }

        const renderProps = {
          ref: baseRef,
          Component,
          className: className
            ? `${baseClassName} ${className}`
            : baseClassName,
          ...omit(props, omittedProps),
        }

        if (injectTheme) {
          renderProps.theme = theme
        }

        return render(renderProps)
      }
    }

  InnerComponent = injectTheme ? withTheme(InnerComponent) : InnerComponent
  InnerComponent.displayName = `sui-${name}`

  function forwardRef(props, ref) {
    return <InnerComponent {...props} baseRef={ref} />
  }
  forwardRef.displayName = InnerComponent.displayName

  const RefComponent = React.forwardRef(forwardRef)
  RefComponent.displayName = InnerComponent.displayName

  const StyledComponent = styled(RefComponent)`
    ${style};
    ${applySystem && applySystem(system)};
  `

  StyledComponent.propTypes = {
    theme: PropTypes.object,
    ...(system ? system.propTypes : {}),
    ...propTypes,
  }

  StyledComponent.defaultProps = {
    theme,
    ...defaultProps,
  }

  patchStyledAPI(StyledComponent, RefComponent)

  return StyledComponent
}

export default createComponent
