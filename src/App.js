import React, { Component } from 'react'

import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from 'material-ui/AppBar'

import Menu from './components/Menu'
import ComputerNodeList from './components/ComputerNodeList'

class App extends Component {
  static defaultProps = {
    computerNodes: [
      [
        { cpu: 'Xeon 10', ram: '8GB' },
        { cpu: 'Xeon 20', ram: '8GB' },
        { cpu: 'Xeon 30', ram: '8GB' }
      ]
    ]
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title='Super computer network'
            onLeftIconButtonTouchTap={() => { this.menu.handleToggle() }}
          />
          <Menu ref={(c) => { this.menu = c }} />
          <div className='App'>
            <ComputerNodeList computerNodes={this.props.computerNodes} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
