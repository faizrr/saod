import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import FlatButton from 'material-ui/FlatButton'

import ComputerNode from './ComputerNode'

import Stack from '../structures/Stack'
import ComputersNetwork from '../structures/ComputersNetwork'
import { stackInstance } from '../index'

export default class ComputerNodeList extends Component {
  static propTypes = {
    computerNodesStack: PropTypes.instanceOf(Stack)
  }

  addStackItem = () => {
    const newItem = new ComputersNetwork()
    stackInstance.push(newItem)
    this.forceUpdate()
  }

  removeStackItem = () => {
    stackInstance.pop()
    this.forceUpdate()
  }

  render () {
    const computerNodes = Array.from(this.props.computerNodesStack)

    return (
      <div className='ComputerNodeList'>
        <FlatButton label="Add new node" style={{ width: '50%', marginBottom: '20px' }} onTouchTap={this.addStackItem} />
        { !stackInstance.isEmpty()
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
