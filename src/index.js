import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'material-icons-css/css/material-icons.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Stack from './structures/Stack'
export const stackInstance = new Stack(render)

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

function render () {
  let computerNodes = []
  for (let c of stackInstance) {
    computerNodes.push(c)
  }

  ReactDOM.render(<App computerNodes={computerNodes} />, document.getElementById('root'))
  registerServiceWorker()
}

render()
