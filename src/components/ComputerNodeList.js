import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import FlatButton from 'material-ui/FlatButton'

import ComputerNode from './ComputerNodeRepresentation'

import Stack from '../structures/Stack'
import ComputersNetwork from '../structures/ComputersNode'

export default class ComputerNodeList extends Component {
  static propTypes = {
    computerNodesStack: PropTypes.instanceOf(Stack)
  }

  addStackItem = () => {
    const newItem = new ComputersNetwork()
    this.props.computerNodesStack.push(newItem)
    this.forceUpdate()
  }

  removeStackItem = () => {
    this.props.computerNodesStack.pop()
    this.forceUpdate()
  }

  render () {
    const computerNodes = Array.from(this.props.computerNodesStack)

    return (
      <div className='ComputerNodeList'>
        <FlatButton label="Add new node" style={{ width: '50%', marginBottom: '20px' }} onTouchTap={this.addStackItem} />
        { !this.props.computerNodesStack.isEmpty()
            ? <FlatButton label="Remove head node" secondary={true} style={{ width: '50%', marginBottom: '20px' }} onTouchTap={this.removeStackItem} />
            : null
        }
        { computerNodes.map((node, index) => (
          <ComputerNode node={node} key={shortid.generate()} />
        )) }
      </div>
    )
  }
}
