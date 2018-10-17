/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from '../styled-engine'
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
    applySystem = system => props => ({ '&&': system(props) }),
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
    class Component extends React.Component {
      render() {
        const {
          className,
          forwardedAs,
          as,
          theme,
          forwardedRef,
          ...props
        } = this.props

        const Component = forwardedAs || as || defaultComponent

        const renderProps = {
          ref: forwardedRef,
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
    return <InnerComponent {...props} forwardedRef={ref} />
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

  return StyledComponent
}

export default createComponent
