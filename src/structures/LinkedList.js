class LinkedListItem {
  constructor (previous, next, data) {
    this.data = data
    this.previous = previous
    this.next = next
  }
}

export default class LinkedList {
  constructor () {
    this._firstItem = null
    this._lastItem = null
    this.length = 0
  }

  isEmpty () {
    return this.length === 0
  }

  addByIndex (index, data) {
    let newItem
    if (index === 0) {
      newItem = new LinkedListItem(null, this._firstItem, data)
    } else if (index === this.length) {
      newItem = new LinkedListItem(this._lastItem, null, data)
    } else {
      const itemToInsertAfter = this._find(index).previous
      newItem = new LinkedListItem(itemToInsertAfter, itemToInsertAfter.next, data)
    }

    if (newItem.next) {
      newItem.next.previous = newItem
    } else {
      this._lastItem = newItem
    }

    if (newItem.previous) {
      newItem.previous.next = newItem
    } else {
      this._firstItem = newItem
    }

    this.length++
  }

  cleanUp () {
    let i = this._firstItem
    while (i) {
      i.previous = null
      const nextItem = i.next
      i.next = null
      i = nextItem
    }
    this._firstItem = null
    this._lastItem = null
  }

  removeByIndex (index) {
    const itemToRemove = this._find(index)
    const prevItem = itemToRemove.previous
    const nextItem = itemToRemove.next

    if (prevItem) {
      prevItem.next = nextItem
    }
    if (nextItem) {
      nextItem.previous = prevItem
    }
    if (index === 0) {
      this._firstItem = nextItem
    }
    if (index === this.length - 1) {
      this._lastItem = prevItem
    }

    this.length--
  }

  editByIndex (index, newData) {
    const element = this._find(index)
    element.data = newData
  }

  getByIndex (index) {
    return this._find(index).data
  }

  toArrayBackward () {
    let result = []
    let currentItem = this._lastItem
    if (currentItem) {
      do {
        result.push(currentItem.data)
        currentItem = currentItem.previous
      } while (currentItem !== null)
    }

    return result
  }

  searchBy (property, searchQuery) {
    let currentItem = this._firstItem
    let index = 0

    if (currentItem) {
      do {
        if (currentItem.data[property] === searchQuery) {
          return {
            index,
            result: currentItem.data
          }
        }
        currentItem = currentItem.next
        index++
      } while (currentItem !== null)
    }

    throw new Error('Element not found')
  }

  searchBackwardBy (property, searchQuery) {
    let currentItem = this._lastItem
    let index = 0

    if (currentItem) {
      do {
        if (currentItem.data[property] === searchQuery) {
          return {
            index,
            result: currentItem.data
          }
        }
        currentItem = currentItem.previous
        index++
      } while (currentItem !== null)
    }

    throw new Error('Element not found')
  }

  *[Symbol.iterator] () {
    let currentItem = this._firstItem
    if (currentItem) {
      do {
        yield currentItem.data
        currentItem = currentItem.next
      } while (currentItem !== null)
    }
  }

  _find (index) {
    let result = this._firstItem
    for (let i = 0; i <= index; i++) {
      if (result === null) {
        throw new Error('Invalid index')
      } else if (i === index) {
        break
      } else {
        result = result.next
      }
    }

    return result
  }
}
