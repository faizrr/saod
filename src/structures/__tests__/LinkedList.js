import LinkedList from '../LinkedList'

describe('addByIndex', () => {
  it('works', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.addByIndex(1, 3)
    list.addByIndex(3, 4)
    list.addByIndex(2, 5)

    let result = []
    for (let i of list) {
      result.push(i)
    }

    expect(result).toEqual([1, 3, 5, 2, 4])
  })
})

describe('removeByIndex', () => {
  it('works', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.addByIndex(2, 3)
    list.removeByIndex(1)

    let result = []
    for (let i of list) {
      result.push(i)
    }

    expect(result).toEqual([1, 3])
  })

  it('works [2]', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.removeByIndex(0)

    let result = []
    for (let i of list) {
      result.push(i)
    }

    expect(result).toEqual([2])
  })
})
