/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const LabelComponent = ({ className, theme, ...props }) => (
  <label className={classNames('sui-label', className)} {...props} />
)

const Label = styled(LabelComponent)`
  display: inline-block;
  margin-bottom: 0.5rem;
`

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

/** @component */
export default Label
