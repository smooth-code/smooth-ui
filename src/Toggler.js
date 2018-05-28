import React from 'react'
import PropTypes from 'prop-types'

class Toggler extends React.Component {
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

Toggler.propTypes = {
  children: PropTypes.func.isRequired,
  defaultToggled: PropTypes.bool,
  onToggle: PropTypes.func,
}

Toggler.defaultProps = {
  defaultToggled: false,
}

export default Toggler
