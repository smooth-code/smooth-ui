import { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

class Portal extends Component {
  state = { node: null }

  componentDidMount() {
    const node = document.createElement(this.props.type)
    document.body.appendChild(node)
    this.setState({ node })
  }

  componentWillUnmount() {
    document.body.removeChild(this.state.node)
  }

  render() {
    return this.state.node
      ? createPortal(this.props.children, this.state.node)
      : null
  }
}

/* #__PURE__ */
Object.defineProperty(Portal, 'propTypes', {
  value: {
    type: PropTypes.string,
    children: PropTypes.node,
  },
})

/* #__PURE__ */
Object.defineProperty(Portal, 'defaultProps', {
  value: {
    type: 'sui-portal',
  },
})

export default Portal
