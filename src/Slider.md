Slider example:

```js
class SliderExample extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = { value: 0.5 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <Slider
        min={0}
        max={1}
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}
;<SliderExample />
```
