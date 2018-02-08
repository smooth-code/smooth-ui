import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import omit from 'object.omit'
import defaultTheme from './style/defaultTheme'
import handleRef from './internal/handleRef'

const addProp = (propName, attribute, transform = x => x) => props =>
  typeof props[propName] !== 'undefined'
    ? css`
        ${attribute || propName}: ${transform(props[propName])};
      `
    : null

const BoxComponent = ({ className, component: Component, ...props }) => (
  <Component
    className={classNames('sui-box', className)}
    {...omit(props, [
      'flex',
      'theme',
      'direction',
      'wrap',
      'alignItems',
      'alignContent',
      'alignSelf',
      'justifyContent',
      'padding',
      'margin',
    ])}
  />
)

/** @component */
const Box = styled(handleRef(BoxComponent))`
  display: flex;

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
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  direction: PropTypes.string,
  wrap: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  alignSelf: PropTypes.string,
  justifyContent: PropTypes.string,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Box.defaultProps = {
  component: 'div',
  theme: defaultTheme,
}

/** @component */
export default Box
