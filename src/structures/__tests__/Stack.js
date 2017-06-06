import Stack from '../Stack'

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
