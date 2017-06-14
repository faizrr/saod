import React, { Component } from 'react'

import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from 'material-ui/AppBar'

import Menu from './components/Menu'
import ComputerNodeList from './components/ComputerNodeList'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={this.props.title}
            onLeftIconButtonTouchTap={() => { this.menu.handleToggle() }}
          />
          <Menu ref={(c) => { this.menu = c }} />
          <div className='App'>
            <ComputerNodeList computerNodesStack={this.props.computerNodesStack} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
