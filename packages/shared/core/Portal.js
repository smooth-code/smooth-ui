import { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

function create() {
  class Portal extends Component {
    static propTypes = {
      type: PropTypes.string,
      children: PropTypes.node,
    }

    static defaultProps = {
      type: 'sui-portal',
    }

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

  return Portal
}

export default create()
