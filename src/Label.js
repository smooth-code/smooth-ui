/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { mixin } from './utils'

const LabelComponent = ({
  component: Component = 'label',
  className,
  theme,
  ...props
}) => <Component className={classNames('sui-label', className)} {...props} />

const LabelRefComponent = handleRef(LabelComponent)

const Label = styled(LabelComponent)`
  ${mixin('base')};
  display: inline-block;
  margin-bottom: 0.5rem;
`

Label.propTypes = {
  children: PropTypes.node,
}

Label.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(Label, LabelRefComponent)

/** @component */
export default Label
