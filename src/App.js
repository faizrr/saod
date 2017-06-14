import React, { Component } from 'react'

import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from 'material-ui/AppBar'

import Menu from './components/Menu'
import SearchDialog from './components/SearchDialog'
import ComputerNodeList from './components/ComputerNodeList'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={this.props.title}
            onLeftIconButtonTouchTap={() => { this.menu.handleToggle() }}
            iconClassNameRight='material-icons material-icons-search'
            onRightIconButtonTouchTap={() => { this.searchDialog.handleOpen() }}
          />
          <Menu ref={(c) => { this.menu = c }} />
          <SearchDialog ref={(c) => { this.searchDialog = c }}/>
          <div className='App'>
            <ComputerNodeList computerNodesStack={this.props.computerNodesStack} />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
