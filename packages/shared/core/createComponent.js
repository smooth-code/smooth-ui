/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { system as fullSystem } from '@smooth-ui/system'
import { styled } from './styled-engine'
import { getTheme, omit, definitionsToTheme, func } from './utils/index'
import { getSystemPropTypes } from './utils/propTypes'
import * as systemDefs from './theming/system'

const defaultSystemTheme = definitionsToTheme(systemDefs)

function getProps(props, defaultProps) {
  const theme = { ...defaultSystemTheme, ...getTheme(props) }
  return { ...defaultProps, ...props, theme }
}

function createComponent(getConfig) {
  const {
    name,
    style,
    omitProps = [],
    defaultProps = {},
    propTypes = {},
    render = ({ Component, ...props }) => <Component {...props} />,
    defaultComponent = 'div',
    system = fullSystem,
    applySystem = system => props => ({
      '&&': system.props(props),
    }),
    InnerComponent: InnerComponentFromConfig,
  } = getConfig()

  const omittedProps = [
    'theme',
    ...(system ? system.meta.props : {}),
    ...omitProps,
  ]

  const baseClassName = `sui-${name}`
  const InnerComponent =
    InnerComponentFromConfig ||
    class Component extends React.Component {
      render() {
        const { className, as, forwardedRef, ...props } = this.props
        const Component = as || defaultComponent

        const renderProps = {
          ref: forwardedRef,
          Component,
          className: className
            ? `${baseClassName} ${className}`
            : baseClassName,
          ...omit(props, omittedProps),
        }

        return render(renderProps)
      }
    }

  InnerComponent.displayName = `sui-${name}`

  function forwardRef(props, ref) {
    return <InnerComponent {...props} forwardedRef={ref} />
  }
  forwardRef.displayName = InnerComponent.displayName

  const RefComponent = React.forwardRef(forwardRef)
  RefComponent.displayName = InnerComponent.displayName

  const StyledComponent = styled(RefComponent)(p => {
    const styles = []
    const props = getProps(p, defaultProps)
    if (func(style)) {
      styles.push(style(props))
    }
    if (func(applySystem)) {
      styles.push(applySystem(system)(props))
    }
    return styles
  })

  StyledComponent.propTypes = {
    theme: PropTypes.object,
    ...getSystemPropTypes(system),
    ...propTypes,
  }

  StyledComponent.defaultProps = {
    ...defaultProps,
  }

  return StyledComponent
}

export default createComponent
