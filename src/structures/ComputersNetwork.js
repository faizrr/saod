import shortid from 'shortid'
import LinkedList from './LinkedList'

export default class ComputersNetwork {
  constructor (id = shortid.generate(), network = new LinkedList()) {
    this.id = id
    this.network = network
  }
}
