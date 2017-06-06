import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from 'material-ui/AppBar'

import Menu from './components/Menu'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title='Super computer network'
            onLeftIconButtonTouchTap={() => { this.menu.handleToggle() }}
          />
          <Menu ref={(c) => { this.menu = c }} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
