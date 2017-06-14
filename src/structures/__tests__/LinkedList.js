import LinkedList from '../LinkedList'

describe('addByIndex', () => {
  it('works', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.addByIndex(1, 3)
    list.addByIndex(3, 4)
    list.addByIndex(2, 5)

    let result = Array.from(list)

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

    let result = Array.from(list)

    expect(result).toEqual([1, 3])
  })

  it('works [2]', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.removeByIndex(0)

    let result = Array.from(list)

    expect(result).toEqual([2])
  })

  it('works [3]', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.addByIndex(2, 3)
    list.removeByIndex(2)
    list.removeByIndex(0)

    let result = Array.from(list)

    expect(result).toEqual([2])
  })

  it('works [4]', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.removeByIndex(0)
    list.addByIndex(0, 2)
    list.addByIndex(1, 3)

    let result = Array.from(list)

    expect(result).toEqual([2, 3])
  })

  it('works [5]', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.addByIndex(2, 3)
    list.removeByIndex(1)
    list.addByIndex(1, 5)

    const result = Array.from(list)

    expect(result).toEqual([1, 5, 3])
  })
})

describe('isEmpty', () => {
  it('works properly for empty list', () => {
    const list = new LinkedList()
    expect(list.isEmpty()).toBeTruthy()
  })

  it('works properly for not empty list', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    expect(list.isEmpty()).toBeFalsy()
  })
})

describe('editByIndex', () => {
  it('works', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.addByIndex(2, 3)
    list.editByIndex(1, 100)

    const result = Array.from(list)

    expect(result).toEqual([1, 100, 3])
  })
})

describe('getByIndex', () => {
  it('works', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.addByIndex(2, 3)

    expect(list.getByIndex(1)).toEqual(2)
  })
})

describe('toArrayBackward', () => {
  it('works', () => {
    const list = new LinkedList()
    list.addByIndex(0, 1)
    list.addByIndex(1, 2)
    list.addByIndex(2, 3)
    list.removeByIndex(1)
    list.addByIndex(1, 5)

    const result = list.toArrayBackward()

    expect(result).toEqual([3, 5, 1])
  })
})

describe('searchBy', () => {
  it('works', () => {
    const list = new LinkedList()
    list.addByIndex(0, { name: 'a', foo: 'bar1' })
    list.addByIndex(1, { name: 'b', foo: 'bar2'  })
    list.addByIndex(2, { name: 'c', foo: 'bar3'  })

    expect(list.searchBy('name', 'c')).toEqual({
      index: 2,
      result: { name: 'c', foo: 'bar3' }
    })
  })

  it('throws error if element is not found', () => {
    const list = new LinkedList()
    list.addByIndex(0, { name: 'a', foo: 'bar1' })
    list.addByIndex(1, { name: 'b', foo: 'bar2'  })
    list.addByIndex(2, { name: 'c', foo: 'bar3'  })

    expect(() => { list.searchBy('name', 'd') }).toThrowError('Element not found')
  })
})

describe('searchBackwardBy', () => {
  it('works', () => {
    const list = new LinkedList()
    list.addByIndex(0, { name: 'a', foo: 'bar1' })
    list.addByIndex(1, { name: 'b', foo: 'bar2'  })
    list.addByIndex(2, { name: 'c', foo: 'bar3'  })

    expect(list.searchBackwardBy('name', 'c')).toEqual({
      index: 0,
      result: { name: 'c', foo: 'bar3' }
    })
  })

  it('throws error if element is not found', () => {
    const list = new LinkedList()
    list.addByIndex(0, { name: 'a', foo: 'bar1' })
    list.addByIndex(1, { name: 'b', foo: 'bar2'  })
    list.addByIndex(2, { name: 'c', foo: 'bar3'  })

    expect(() => { list.searchBackwardBy('name', 'd') }).toThrowError('Element not found')
  })
})
