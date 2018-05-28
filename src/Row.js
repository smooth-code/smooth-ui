import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import * as defaultTheme from './theme/defaultTheme'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import { mixin, resolveUnit } from './utils'

const RowComponent = ({
  component: Component = 'div',
  className,
  theme,
  ...props
}) => <Component className={classNames('sui-row', className)} {...props} />

const RowRefComponent = handleRef(RowComponent)

const Row = styled(RowRefComponent)`
  ${mixin('base')};
  flex-grow: 1;
  flex-wrap: wrap;
  display: flex;
  margin-right: -${props => resolveUnit(props.gutter)};
  margin-left: -${props => resolveUnit(props.gutter)};

  > .sui-col {
    padding-left: ${props => resolveUnit(props.gutter)};
    padding-right: ${props => resolveUnit(props.gutter)};
  }
`

Row.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Row.defaultProps = {
  gutter: 15,
  theme: defaultTheme,
}

setWithComponent(Row, RowRefComponent)

/** @component */
export default Row
