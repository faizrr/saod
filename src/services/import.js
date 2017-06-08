import { render, stackInstance } from '../index'

import ComputersNetwork from '../structures/ComputersNetwork'
import LinkedList from '../structures/LinkedList'

export default function importService (e) {
  e.preventDefault()

  let reader = new FileReader()
  let file = e.target.files[0]

  if (!file) {
    return
  }

  reader.onloadend = () => {
    stackInstance.cleanUp()

    try {
      let stackItems = JSON.parse(reader.result)
      stackItems.reverse()
      stackItems.forEach((item) => {
        const networkAsLinkedList = createLinkedList(item.network)
        stackInstance.push(new ComputersNetwork(item.id, networkAsLinkedList))
      })

      render()
    } catch (e) {
      alert('Error occurred: ' + e)
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
