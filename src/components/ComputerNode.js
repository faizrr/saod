import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './ComputerNode.css'

import { Card, CardHeader, CardMedia, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Graph from 'react-graph-vis'

export default class ComputerNode extends Component {
  static propTypes = {
    index: PropTypes.number,
    computers: PropTypes.arrayOf(PropTypes.object)
  }

  get graphDetails () {
    const { computers } = this.props
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
      nodes: computers.map((computer, i) => ({ id: i, label: `${computer.cpu} ${computer.ram}` })),
      edges: [...forwardEdges, ...backwardEdges]
    }
  }

  render () {
    return (
      <Card>
        <CardHeader
          title={`Computer node #${this.props.index}`}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Add new computer" />
        </CardActions>
        <CardMedia expandable={true} style={{height: '300px'}}>
          <Graph graph={this.graphDetails} options={{height: '300px'}} />
        </CardMedia>
      </Card>
    )
  }
}
