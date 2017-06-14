import Stack from '../Stack'
import ComputerNode from '../ComputersNode'

describe('isEmpty', () => {
  it('returns false for empty stack', () => {
    const s = new Stack()
    expect(s.isEmpty()).toEqual(true)
  })

  it('returns true for non-empty stack', () => {
    const s = new Stack()
    s.push('foobar')
    expect(s.isEmpty()).toEqual(false)
  })
})

describe('push', () => {
  it('adds element to the head', () => {
    const s = new Stack()
    s.push('first')
    s.push('second')
    expect(s.lastItem).toEqual('second')
  })
})

describe('pop', () => {
  it('returns element from head', () => {
    const s = new Stack()
    s.push('first')
    s.push('second')
    const result = s.pop()
    expect(result).toEqual('second')
  })

  it('removes element from head', () => {
    const s = new Stack()
    s.push('first')
    s.push('second')
    s.pop()
    expect(s.lastItem).toEqual('first')
  })
})

describe('pop for elements with cleanUp function', () => {
  it('works [1]', () => {
    const s = new Stack()
    const computerNode1 = new ComputerNode()
    const computerNode2 = new ComputerNode()
    s.push(computerNode1)
    s.push(computerNode2)

    computerNode1.addComputerByIndex(0, { cpu: 'Intel', ram: '1gb' })
    computerNode1.addComputerByIndex(1, { cpu: 'AMD', ram: '1gb' })

    computerNode2.addComputerByIndex(0, { cpu: 'ARM', ram: '1gb' })
    computerNode2.addComputerByIndex(1, { cpu: 'Elbrus', ram: '1gb' })

    s.pop()

    const result = Array.from(s)
    expect(result).toEqual([computerNode1])
  })

  it('works [2]', () => {
    const s = new Stack()
    const computerNode1 = new ComputerNode()
    const computerNode2 = new ComputerNode()
    s.push(computerNode1)
    s.push(computerNode2)

    computerNode1.addComputerByIndex(0, { cpu: 'Intel', ram: '1gb' })
    computerNode1.addComputerByIndex(1, { cpu: 'AMD', ram: '1gb' })

    computerNode2.addComputerByIndex(0, { cpu: 'ARM', ram: '1gb' })
    computerNode2.addComputerByIndex(1, { cpu: 'Elbrus', ram: '1gb' })

    s.pop()
    s.pop()

    const result = Array.from(s)
    expect(result).toEqual([])
  })
})

describe('iteration via for .. of works', () => {
  it('works', () => {
    const s = new Stack()
    s.push(1)
    s.push(2)
    s.push(3)

    let result = []
    for (let item of s) {
      result.push(item)
    }

    expect(result).toEqual([3, 2, 1])
  })
})

describe('getByIndex', () => {
  it('returns element by index', () => {
    const s = new Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    s.push(4)

    expect(s.getByIndex(1)).toEqual(3)
  })

  it('throws error if invalid index provided', () => {
    const s = new Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    s.push(4)

    expect(() => {
      s.getByIndex(100500)
    }).toThrow()
  })
})
