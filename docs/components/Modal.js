import React from 'react'
import { styled, ModalDialog } from '@smooth-ui/core-sc'

export const ModalDialogExample = styled(ModalDialog)`
  left: auto;
  margin-right: auto;
  margin-left: auto;
`

export class Counter extends React.Component {
  state = { count: 0 }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(({ count }) => ({ count: count + 1 })),
      1000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return this.state.count
  }
}
