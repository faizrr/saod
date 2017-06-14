import { saveAs } from 'file-saver'

import { computersNetworkInstance } from '../index'

export default function exportStructure () {
  const stackItems = Array.from(computersNetworkInstance.network)
  const result = stackItems.map((s) => ({ id: s.id, computers: Array.from(s.computers) }))
  const jsonContent = JSON.stringify({
    name: computersNetworkInstance.name,
    nodes: result
  }, null, 2)

  const blob = new Blob([jsonContent], { type: 'text/plain;charset=utf-8' })
  saveAs(blob, 'file.json')
}
