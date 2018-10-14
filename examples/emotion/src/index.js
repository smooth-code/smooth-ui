/* eslint-disable */
import React from 'react'
import { render } from 'react-dom'
import { Button, styled } from '@smooth-ui/core-em'

const LinkButton = styled(Button.withComponent('a').withComponent('div'))`
  color: blue !important;
`

const App = () => <LinkButton>Hello</LinkButton>

const root = document.createElement('div')
document.body.appendChild(root)

render(<App />, root)
