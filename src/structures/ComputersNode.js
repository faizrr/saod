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

  searchByRam (ram) {
    return this.computers.searchBy('ram', ram)
  }

  searchByCpu (cpu) {
    return this.computers.searchBy('cpu', cpu)
  }

  searchBackwardByRam (ram) {
    return this.computers.searchBackwardBy('ram', ram)
  }

  searchBackwardByCpu (cpu) {
    return this.computers.searchBackwardBy('cpu', cpu)
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
