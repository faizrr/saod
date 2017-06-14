import { computersNetworkInstance } from '../index'

export default function search (data) {
  const { property, query, backward } = data
  const methodForSearch = backward ? 'searchBackwardBy' : 'searchBy'
  const stackItems = Array.from(computersNetworkInstance.network)

  let searchResult
  let computerNodeWithMatch
  stackItems.forEach((node) => {
    try {
      searchResult = node[methodForSearch](property, query)
      computerNodeWithMatch = node
    } catch (e) { }
  })

  if (searchResult && computerNodeWithMatch) {
    alert(
      `Found at ${searchResult.index} position at ${computerNodeWithMatch.id} node\n\n`
      + `Full description: ${JSON.stringify(searchResult.result, null, 2)}`
    )
  } else {
    alert('Not found!')
  }
}
