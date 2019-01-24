/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { system as fullSystem } from '@smooth-ui/system'
import { styled } from '../styled-engine'
import { omit } from './misc'
import { gth } from './system'

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
    applySystem = system => props => {
      const theme = gth(props)
      return { '&&': system.props({ ...props, theme }) }
    },
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

  const StyledComponent = styled(RefComponent)`
    ${typeof style === 'function'
      ? p => style({ ...defaultProps, ...p })
      : style};
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
    ...defaultProps,
  }

  return StyledComponent
}

export default createComponent
