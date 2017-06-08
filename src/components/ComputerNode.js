import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ComputerNode.css'

import { Card, CardHeader, CardMedia, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Graph from 'react-graph-vis'

import AddComputerDialog from './AddComputerDialog'

import ComputersNetwork from '../structures/ComputersNetwork'

export default class ComputerNode extends Component {
  static propTypes = {
    node: PropTypes.instanceOf(ComputersNetwork)
  }

  get graphDetails () {
    const computers = Array.from(this.props.node.network)
    const length = computers.length

    const forwardEdges = computers.map((computer, i) => {
      if (i < length - 1) {
        return { from: i, to: i + 1, smooth: { type: 'curvedCW', roundness: 0.2 } }
      } else {
        return { from: i, to: 0, smooth: { type: 'curvedCW', roundness: 0.2 } }
      }
    })
    const backwardEdges = computers.map((computer, i) => {
      if (i < length - 1) {
        return { from: i + 1, to: i, smooth: { type: 'curvedCW', roundness: 0.2 } }
      } else {
        return { from: 0, to: i, smooth: { type: 'curvedCW', roundness: 0.2 } }
      }
    })

    return {
      nodes: computers.map((computer, i) => ({
        id: i,
        label: `(${i}) ${computer.cpu} ${computer.ram}`,
        color: 'rgb(0, 188, 212)',
        font: { color: '#fff' }
      })),
      edges: length > 1 ? [...forwardEdges, ...backwardEdges] : []
    }
  }

  addComputer = (index, values) => {
    this.props.node.network.addByIndex(index, values)
    this.forceUpdate()
  }

  editComputer = (index, values) => {
    this.props.node.network.editByIndex(index, values)
    this.forceUpdate()
  }

  handleNodeSelect = (obj) => {
    const index = obj.nodes[0]
    const initialValues = this.props.node.network.getByIndex(index)
    this.addComputerDialog.handleOpen({ index, ...initialValues, edit: true })
  }

  render () {
    return (
      <Card>
        <CardHeader
          title={`Computer node ${this.props.node.id}`}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton
            label="Add new computer"
            onTouchTap={() => { this.addComputerDialog.handleOpen() }}
          />
        </CardActions>
        <CardMedia expandable={true} style={{height: '300px'}}>
          <Graph
            graph={this.graphDetails}
            options={{ height: '300px', interaction: { zoomView: false } }}
            events={{ selectNode: this.handleNodeSelect }}
          />
        </CardMedia>
        <AddComputerDialog
          addComputer={this.addComputer}
          editComputer={this.editComputer}
          networkLength={this.props.node.network.length}
          ref={(c) => { this.addComputerDialog = c }}
        />
      </Card>
    )
  }
}
