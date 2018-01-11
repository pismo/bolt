import React from 'react'
import { render } from 'react-dom'
import typography from '@pismo/bolt-typography'
import App from './App'

render(
  <App />,
  document.getElementById('app-container'),
)

typography.injectStyles()

export default App
