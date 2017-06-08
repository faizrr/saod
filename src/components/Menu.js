import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import ImportService from '../services/import'
import ExportService from '../services/export'

import { stackInstance } from '../index'

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
}

export default class DrawerUndockedExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  render () {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={open => this.setState({ open })}
      >
        <MenuItem>
          Import
          <input type='file' onChange={ImportService} style={styles.uploadInput} />
        </MenuItem>
        <MenuItem onTouchTap={() => { ExportService(stackInstance) }}>Export</MenuItem>
      </Drawer>
    )
  }
}
