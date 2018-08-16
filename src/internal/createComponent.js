/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { css } from 'styled-components'
import handleRef from './handleRef'
import setWithComponent from './setWithComponent'
import * as defaultTheme from '../theme/defaultTheme'
import * as utils from '../utils'

function createComponent(getConfig) {
  const {
    name,
    style,
    defaultProps = {},
    propTypes = {},
    render = ({ Component, ...props }) => <Component {...props} />,
    defaultComponent = 'div',
    InnerComponent: InnerComponentFromConfig,
  } = getConfig({ ...utils, css, classNames })

  const InnerComponent =
    InnerComponentFromConfig ||
    (({
      className,
      component: Component = defaultComponent,
      theme,
      ...props
    }) =>
      render({
        Component,
        className: classNames(`sui-${name}`, className),
        ...props,
      }))

  InnerComponent.displayName = `sui-${name}`

  const RefComponent = handleRef(InnerComponent)

  const StyledComponent = styled(RefComponent)`
    ${utils.mixin('base')};
    ${style};
  `

  StyledComponent.propTypes = {
    theme: PropTypes.object,
    ...propTypes,
  }

  StyledComponent.defaultProps = {
    theme: defaultTheme,
    ...defaultProps,
  }

  setWithComponent(StyledComponent, RefComponent)

  return StyledComponent
}

export default createComponent
