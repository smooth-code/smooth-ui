import React from 'react'

class SwitchState extends React.Component {
  state = {
    focused: false,
    checked: this.props.checked || this.props.defaultChecked || false,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.checked !== undefined && props.checked !== state.checked) {
      return { ...state, checked: props.checked }
    }

    return state
  }

  handleChange = event => {
    if (this.props.checked === undefined) {
      this.setState({ checked: event.currentTarget.checked })
    }

    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  handleFocus = event => {
    this.setState({ focused: true })
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  handleBlur = event => {
    this.setState({ focused: false })
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  render() {
    const {
      checked,
      children,
      defaultChecked,
      onChange,
      onBlur,
      onFocus,
      style,
      ...props
    } = this.props

    return this.props.children({
      focused: this.state.focused,
      checked: this.state.checked,
      disabled: props.disabled,
      input: {
        checked: this.state.checked,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        style: {
          position: 'absolute',
          margin: 0,
          padding: 0,
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          ...style,
        },
        ...props,
      },
    })
  }
}

export default SwitchState
