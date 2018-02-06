import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import defaultTheme from '../style/defaultTheme'

const InnerSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${props => props.theme.zIndexes.innerSwitch};

  .sui-inner-switch-input {
    margin: 0;
    padding: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: ${props => props.theme.zIndexes.innerSwitch};
  }
`

class InnerSwitch extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.func,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    inputType: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onStateChange: PropTypes.func,
    theme: PropTypes.object,
  }

  static defaultProps = {
    theme: defaultTheme,
  }

  static contextTypes = {
    suiGroup: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      checked: props.checked || props.defaultChecked || false,
    }
  }

  componentWillMount() {
    if (this.context.suiGroup) {
      this.context.suiGroup.register(this)
    }

    if (this.props.onStateChange) {
      this.props.onStateChange(this.state)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.checked !== undefined &&
      nextProps.checked !== this.state.checked
    ) {
      this.updateState({ checked: nextProps.checked })
    }
  }

  componentWillUnmount() {
    if (this.context.suiGroup) {
      this.context.suiGroup.unregister(this)
    }
  }

  handleChange = event => {
    if (this.props.checked === undefined) {
      this.updateState({ checked: event.target.checked })
    }

    if (this.context.suiGroup) {
      this.context.suiGroup.notify(event)
    }

    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  handleFocus = event => {
    this.updateState({ focused: true })
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  handleBlur = event => {
    this.updateState({ focused: false })
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  updateState(state) {
    if (this.props.onStateChange) {
      this.props.onStateChange(state)
    }
    this.setState(state)
  }

  render() {
    const {
      baseRef,
      checked,
      children,
      defaultChecked,
      inputType,
      onStateChange,
      onChange,
      onBlur,
      onFocus,
      theme,
      ...props
    } = this.props

    return (
      <InnerSwitchContainer theme={theme} className="sui-inner-switch">
        <input
          ref={baseRef}
          className="sui-inner-switch-input"
          type={inputType}
          onChange={this.handleChange}
          checked={this.state.checked}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...props}
        />
        {this.props.children({
          focused: this.state.focused,
          checked: this.state.checked,
          disabled: props.disabled,
        })}
      </InnerSwitchContainer>
    )
  }
}

export default InnerSwitch
