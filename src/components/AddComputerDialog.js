import React, { Component } from 'react'
import shortid from 'shortid'

import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const initialState = {
  edit: false,
  open: false,
  cpu: '',
  ram: '',
  index: 0
}

const validStrRegex = new RegExp('^[^-\\s][a-zA-Z0-9_\\s-]+$')

export default class AddComputerDialog extends Component {
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
    if (!this.isValid()) {
      return
    }

    const { cpu, ram, index, edit } = this.state
    const trimmedDetails = {
      cpu: cpu.replace(/\s+/g, ' ').trim(),
      ram: ram.replace(/\s+/g, ' ').trim()
    }

    if (edit) {
      this.props.editComputer(index, trimmedDetails)
    } else {
      this.props.addComputer(index, trimmedDetails)
    }
    this.handleClose()
  }

  handleDelete = () => {
    const { index } = this.state
    this.props.deleteComputer(index)
    this.handleClose()
  }

  get availableIndexes () {
    let items = []
    for (let i=0; i <= this.props.networkLength; i++) {
      items.push(
        <MenuItem value={i} primaryText={String(i)} key={shortid.generate()} />
      )
    }

    return items
  }

  isValid = () => {
    return this.isValidCpuString() && this.isValidRamString()
  }

  isValidCpuString = () => {
    return validStrRegex.test(this.state.cpu)
  }

  isValidRamString = () => {
    return validStrRegex.test(this.state.ram)
  }

  render() {
    const actions = [
      this.state.edit && <FlatButton
        label="Delete"
        secondary={true}
        onTouchTap={this.handleDelete}
      />,
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />
    ]

    return (
      <Dialog
        title={this.state.edit ? 'Edit computer' : 'Add new computer'}
        actions={actions}
        modal={false}
        open={this.state.open}
        contentStyle={{ width: '400px', margin: '0 auto' }}
        onRequestClose={this.handleClose}
      >
        <TextField
          floatingLabelText="CPU"
          errorText={!this.isValidCpuString() && 'Invalid'}
          fullWidth={true}
          value={this.state.cpu}
          onChange={(e, value) => { this.setState({ cpu: value }) }}
        />
        <br />
        <TextField
          floatingLabelText="RAM"
          errorText={!this.isValidRamString() && 'Invalid'}
          fullWidth={true}
          value={this.state.ram}
          onChange={(e, value) => { this.setState({ ram: value }) }}
        />
        <br />
        <SelectField
          disabled={this.state.edit}
          floatingLabelText="Index"
          value={this.state.index}
          onChange={(e, index, value) => { this.setState({ index: value }) }}
          fullWidth={true}
        >
          { this.availableIndexes }
        </SelectField>
      </Dialog>
    )
  }
}