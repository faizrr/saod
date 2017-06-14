import Ajv from 'ajv'

import { render, computersNetworkInstance } from '../index'

import ComputersNetwork from '../structures/ComputersNode'
import LinkedList from '../structures/LinkedList'

import fileSchema from '../schemas/outputFileSchema.json'

export default function importService (e) {
  e.preventDefault()

  let reader = new FileReader()
  let file = e.target.files[0]

  if (!file) {
    return
  }

  reader.onloadend = () => {
    const stackInstance = computersNetworkInstance.network
    stackInstance.cleanUp()

    try {
      let info = JSON.parse(reader.result)

      const ajv = new Ajv()
      const valid = ajv.validate(fileSchema, info)

      if (!valid) {
        throw new Error(ajv.errorsText())
      }

      let stackItems = info.nodes
      stackItems.reverse()
      stackItems.forEach((item) => {
        const networkAsLinkedList = createLinkedList(item.computers)
        stackInstance.push(new ComputersNetwork(item.id, networkAsLinkedList))
      })

      computersNetworkInstance.name = info.name

      render()
    } catch (e) {
      alert(e)
    }
  }

  reader.readAsText(file)
}

function createLinkedList (array) {
  const list = new LinkedList()
  array.forEach((a, index) => {
    list.addByIndex(index, a)
  })

  return list
}
