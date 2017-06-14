import shortid from 'shortid'
import LinkedList from './LinkedList'

export default class ComputersNode {
  constructor (id = shortid.generate(), list = new LinkedList()) {
    this.id = id
    this.computers = list
  }

  cleanUp () {
    this.computers.cleanUp()
  }

  searchBy (...args) {
    return this.computers.searchBy(...args)
  }

  searchBackwardBy (...args) {
    return this.computers.searchBackwardBy(...args)
  }

  addComputerByIndex (index, details) {
    this.computers.addByIndex(index, details)
  }

  editComputerByIndex (index, details) {
    this.computers.editByIndex(index, details)
  }

  removeComputerByIndex (index) {
    this.computers.removeByIndex(index)
  }

  getComputerByIndex (index) {
    return this.computers.getByIndex(index)
  }
}
