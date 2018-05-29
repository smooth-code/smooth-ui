/* eslint-disable no-underscore-dangle */
import React from 'react'

class Transition extends React.Component {
  state = { entering: false, exiting: false, toggle: this.props.toggle }

  componentDidUpdate() {
    if (this.state.toggle === this.props.toggle) return

    setTimeout(() => {
      this.setState({
        entering: this.props.toggle,
        exiting: !this.props.toggle,
      })
    })

    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState({
        entering: false,
        exiting: false,
      })
    }, this.props.ms)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return this.props.children(this.state)
  }
}

export default Transition
