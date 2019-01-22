/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { system as fullSystem } from '@smooth-ui/system'
import { styled, withTheme } from '../styled-engine'
import * as theme from '../theme'
import { omit } from './misc'

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
    applySystem = system => props => ({ '&&': system.props(props) }),
    injectTheme,
    InnerComponent: InnerComponentFromConfig,
  } = getConfig()

  const omittedProps = [
    'theme',
    '__scTheme',
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
          uiAs,
          theme,
          __scTheme,
          forwardedRef,
          ...props
        } = this.props

        const Component = uiAs || defaultComponent

        const renderProps = {
          ref: forwardedRef,
          Component,
          className: className
            ? `${baseClassName} ${className}`
            : baseClassName,
          ...omit(props, omittedProps),
        }

        if (injectTheme) {
          renderProps.theme = theme || __scTheme
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

  // eslint-disable-next-line no-underscore-dangle
  RefComponent.__smoothUIComponent = true

  const StyledComponent = styled(RefComponent)`
    ${style};
    ${applySystem && applySystem(system)};
  `

  StyledComponent.propTypes = {
    theme: PropTypes.object,
    ...(system
      ? system.meta.props.reduce((obj, prop) => {
          obj[prop] = PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.object,
          ])
          return obj
        }, {})
      : {}),
    ...propTypes,
  }

  StyledComponent.defaultProps = {
    __scTheme: theme,
    ...defaultProps,
  }

  return StyledComponent
}

export default createComponent
