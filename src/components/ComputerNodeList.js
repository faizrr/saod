import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

import FlatButton from 'material-ui/FlatButton'

import ComputerNode from './ComputerNode'

import Stack from '../structures/Stack'
import { stackInstance } from '../index'

export default class ComputerNodeList extends Component {
  static propTypes = {
    computerNodesStack: PropTypes.instanceOf(Stack)
  }

  render () {
    const computerNodes = Array.from(this.props.computerNodesStack)

    return (
      <div className='ComputerNodeList'>
        <FlatButton label="Add new node" style={{ width: '50%', marginBottom: '20px' }} onTouchTap={() => { stackInstance.push([{ cpu: 'asd', ram: '123' }])} } />
        <FlatButton label="Remove head node" secondary={true} style={{ width: '50%', marginBottom: '20px' }} onTouchTap={() => { stackInstance.pop() }} />
        { computerNodes.map((computers, index) => (
          <ComputerNode computers={computers} index={computerNodes.length - index} key={shortid.generate()} />
        )) }
      </div>
    )
  }
}
