import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FlatButton from 'material-ui/FlatButton'

import ComputerNode from './ComputerNode'

export default class ComputerNodeList extends Component {
  static propTypes = {
    computerNodes: PropTypes.arrayOf(PropTypes.object)
  }

  render () {
    return (
      <div className='ComputerNodeList'>
        <FlatButton label="Add new node" fullWidth={true} style={{ marginBottom: '20px' }} />
        { this.props.computerNodes.map((computers, index) => (
          <ComputerNode computers={computers} index={index} />
        )) }
      </div>
    )
  }
}
