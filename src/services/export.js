import { saveAs } from 'file-saver'

export default function exportStructure (stack) {
  const stackItems = Array.from(stack)
  const result = stackItems.map((s) => ({ id: s.id, network: Array.from(s.network) }))
  const jsonContent = JSON.stringify(result, null, 2)

  const blob = new Blob([jsonContent], { type: 'text/plain;charset=utf-8' })
  saveAs(blob, 'file.json')
}
