import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// To facilitate the temporary "auth"
import jsCookie from 'js-cookie'
window.jsCookie = jsCookie

const rootEl = document.getElementById('root')
ReactDOM.render(
  <App />,
  rootEl
)
