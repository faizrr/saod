import shortid from 'shortid'
import LinkedList from './LinkedList'

export default class ComputersNetwork {
  constructor () {
    this.id = shortid.generate()
    this.network = new LinkedList()
  }
}
