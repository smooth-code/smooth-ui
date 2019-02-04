import { Component } from 'react'
import PropTypes from 'prop-types'

class Toggler extends Component {
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

/* #__PURE__ */
Object.defineProperty(Toggler, 'propTypes', {
  value: {
    children: PropTypes.func.isRequired,
    defaultToggled: PropTypes.bool,
    onToggle: PropTypes.func,
  },
})

/* #__PURE__ */
Object.defineProperty(Toggler, 'defaultProps', {
  value: {
    defaultToggled: false,
  },
})

export default Toggler
