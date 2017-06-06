import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class DrawerUndockedExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={open => this.setState({ open })}
      >
        <MenuItem onTouchTap={this.handleClose}>Import</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Export</MenuItem>
      </Drawer>
    )
  }
}
