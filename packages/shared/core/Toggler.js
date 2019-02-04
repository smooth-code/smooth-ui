import { Component } from 'react'
import PropTypes from 'prop-types'

function create() {
  class Toggler extends Component {
    static propTypes = {
      children: PropTypes.func.isRequired,
      defaultToggled: PropTypes.bool,
      onToggle: PropTypes.func,
    }

    static defaultProps = {
      defaultToggled: false,
    }

    state = { toggled: this.props.defaultToggled }

    onToggle = value => {
      this.setState(
        previousState => ({
          toggled: typeof value === 'boolean' ? value : !previousState.toggled,
        }),
        () => {
          if (this.props.onToggle) {
            this.props.onToggle(this.state.toggled)
          }
        },
      )
    }

    render() {
      return this.props.children({
        toggled: this.state.toggled,
        onToggle: this.onToggle,
      })
    }
  }

  return Toggler
}

export default create()
