import React from 'react'

const BlockList = ({ children }) =>
  React.Children.map(children, child => (
    <div style={{ margin: '10px 0' }}>{child}</div>
  ))

export default BlockList
