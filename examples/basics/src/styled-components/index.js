/* eslint-disable */
import React from 'react'
import { Button, Normalize, styled, uiAs } from '@smooth-ui/core-sc'

const BlackButton = styled(Button)`
  color: black;
`

const DivButton = uiAs(Button, 'div')

const App = () => (
  <>
    <Normalize />
    <div>
      <Button>Basic</Button>
    </div>
    <div>
      <DivButton>{`uiAs(Button, 'div')`}</DivButton>
    </div>
    <div>
      <Button uiAs="div">{`<Button uiAs="div">`}</Button>
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
      >{`<Button css={{{color: 'black'}}>`}</Button>
    </div>
  </>
)

export default App
