import React, { Component } from 'react'

import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import Toggle from 'material-ui/Toggle'
import MenuItem from 'material-ui/MenuItem'

import performSearch from '../services/search'

const initialState = {
  open: false,
  property: 'cpu',
  query: '',
  backward: false
}

export default class SearchDialog extends Component {
  state = Object.assign({}, initialState)

  handleOpen = (initialValues) => {
    this.setState({
      ...initialValues,
      open: true
    });
  }

  handleClose = () => {
    this.setState(initialState);
  }

  handleSubmit = () => {
    performSearch(this.state)
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Search"
        primary={true}
        onTouchTap={this.handleSubmit}
      />
    ]

    return (
      <Dialog
        title='Search'
        actions={actions}
        modal={false}
        open={this.state.open}
        contentStyle={{width: '400px', margin: '0 auto'}}
        onRequestClose={this.handleClose}
      >
        <Toggle
          label="Search backward in linked list"
          value={this.state.backward}
          onToggle={(e, isInputChecked) => { this.setState({ backward: isInputChecked }) }}
        />
        <br />
        <SelectField
          floatingLabelText="Property to use for search"
          value={this.state.property}
          onChange={(e, index, value) => {
            this.setState({property: value})
          }}
          fullWidth={true}
        >
          <MenuItem value='cpu' primaryText='CPU' />
          <MenuItem value='ram' primaryText='RAM' />
        </SelectField>
        <br />
        <TextField
          floatingLabelText="Search query"
          fullWidth={true}
          value={this.state.query}
          onChange={(e, value) => {
            this.setState({query: value})
          }}
        />
      </Dialog>
    )
  }
}