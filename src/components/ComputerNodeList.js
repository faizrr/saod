import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FlatButton from 'material-ui/FlatButton'

import ComputerNode from './ComputerNode'

import { stackInstance } from '../index'

export default class ComputerNodeList extends Component {
  static propTypes = {
    computerNodes: PropTypes.arrayOf(PropTypes.object)
  }

  render () {
    return (
      <div className='ComputerNodeList'>
        <FlatButton label="Add new node" fullWidth={true} style={{ marginBottom: '20px' }} onTouchTap={() => { stackInstance.push([{ cpu: 'asd', ram: '123' }])} } />
        { this.props.computerNodes.map((computers, index) => (
          <ComputerNode computers={computers} withRemoveButton={index === 0} index={this.props.computerNodes.length - index} />
        )) }
      </div>
    )
  }
}
