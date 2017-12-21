import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

const RowComponent = ({ className, xs, sm, md, lg, xl, ...props }) => (
  <div className={classNames('sui-row', className)} {...props} />
)

const Row = styled(RowComponent)`
  flex-grow: 1;
  flex-wrap: wrap;
  display: flex;
`

/** @component */
export default Row
