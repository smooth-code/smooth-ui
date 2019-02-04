import React from 'react'
import PropTypes from 'prop-types'

function create() {
  class RadioGroup extends React.Component {
    static propTypes = {
      children: PropTypes.node,
    }

    static childContextTypes = {
      suiGroup: PropTypes.object,
    }

    getChildContext() {
      return { suiGroup: this }
    }

    controls = []

    register(control) {
      this.controls.push(control)
    }

    unregister(control) {
      const index = this.controls.indexOf(control)
      if (index !== -1) this.controls.splice(index, 1)
    }

    notify(event) {
      this.controls.forEach(control => {
        if (
          control.props.checked === undefined &&
          control.props.name === event.target.name &&
          control.props.value !== event.target.value
        ) {
          control.updateState({ checked: false })
        }
      })
    }

    render() {
      return this.props.children
    }
  }

  return RadioGroup
}

export default create()
