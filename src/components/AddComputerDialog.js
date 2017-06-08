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
  index: ''
}

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
    const { cpu, ram, index, edit } = this.state
    if (edit) {
      this.props.editComputer(index, { cpu, ram })
    } else {
      this.props.addComputer(index, {cpu, ram})
    }
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

  render() {
    const actions = [
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
          fullWidth={true}
          value={this.state.cpu}
          onChange={(e, value) => { this.setState({ cpu: value }) }}
        />
        <br /><br />
        <TextField
          floatingLabelText="RAM"
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