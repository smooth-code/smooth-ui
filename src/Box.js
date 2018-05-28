import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import * as defaultTheme from './theme/defaultTheme'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import { mixin } from './utils'

const addProp = (propName, attribute, transform = x => x) => props =>
  typeof props[propName] !== 'undefined'
    ? css`
        ${attribute || propName}: ${transform(props[propName])};
      `
    : null

const BoxComponent = ({
  className,
  component: Component = 'div',
  flex,
  theme,
  direction,
  wrap,
  alignItems,
  alignContent,
  alignSelf,
  justifyContent,
  padding,
  margin,
  ...props
}) => <Component className={classNames('sui-box', className)} {...props} />

const BoxRefComponent = handleRef(BoxComponent)

const Box = styled(BoxRefComponent)`
  ${mixin('base')} display: flex;

  ${addProp('flex', 'flex', flex => (flex === true ? 1 : flex))};
  ${addProp('direction', 'flex-direction')};
  ${addProp('wrap', 'flex-wrap')};
  ${addProp('alignItems', 'align-items')};
  ${addProp('alignContent', 'align-content')};
  ${addProp('alignSelf', 'align-self')};
  ${addProp('justifyContent', 'justify-content')};
  ${addProp('padding')};
  ${addProp('margin')};
`

Box.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  children: PropTypes.node,
  direction: PropTypes.string,
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  justifyContent: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrap: PropTypes.string,
}

Box.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(Box, BoxRefComponent)

/** @component */
export default Box
