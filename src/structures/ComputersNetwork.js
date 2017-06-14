import Stack from './Stack'

class ComputersNetwork {
  constructor (name = 'Super computer network', network = new Stack()) {
    this.name = name
    this.network = network
  }

  push () {
    this.network.push()
  }
}

export default ComputersNetwork
