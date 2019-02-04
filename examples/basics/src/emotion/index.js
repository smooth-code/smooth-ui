/* eslint-disable */
/* @jsx jsx */
import React from 'react'
import { render } from 'react-dom'
import { jsx, css, Button, Normalize, styled } from '@smooth-ui/core-em'

const BlackButton = styled(Button)`
  color: black;
`

const DivButton = Button.withComponent('div')

const App = () => (
  <>
    <Normalize />
    <div>
      <Button>Basic</Button>
    </div>
    <div>
      <DivButton>{`Button.withComponent('div')`}</DivButton>
    </div>
    <div>
      <Button as="div">{`<Button as="div">`}</Button>
    </div>
    <div>
      <BlackButton>{`styled(Button)\`color: black\``}</BlackButton>
    </div>
    <div>
      <Button
        css={css`
          color: black;
        `}
      >{`<Button css={css\`color: black\`}>`}</Button>
    </div>
    <div>
      <Button
        css={{ color: 'black' }}
        backgroundColor="secondary"
      >{`<Button css={{{color: 'black'}}>`}</Button>
    </div>
  </>
)

export default App
