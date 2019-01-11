/* eslint-disable */
import React from 'react'
import { render } from 'react-dom'
import qs from 'qs'
import EmotionApp from './emotion'
import StyledComponentsApp from './styled-components'

const root = document.createElement('div')
document.body.appendChild(root)

const query = qs.parse(location.search.replace(/^\?/, ''))

render(
  <div>
    {query.em !== '0' ? (
      <div>
        <h2>Emotion</h2>
        <EmotionApp />
      </div>
    ) : null}
    {query.sc !== '0' ? (
      <div>
        <h2>Styled Components</h2>
        <StyledComponentsApp />
      </div>
    ) : null}
  </div>,
  root,
)
