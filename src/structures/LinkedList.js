class LinkedListItem {
  constructor (previous, next, data) {
    this.data = data
    this.previous = previous
    this.next = next
  }
}

export default class LinkedList {
  constructor () {
    this._head = null
  }

  isEmpty () {
    return this._head === null
  }

  addByIndex (index, data) {
    if (this.isEmpty()) {
      this._addFirstElement(data)
    } else {
      const itemToModify = this._find(index)
      const previousItem = itemToModify.previous

      const newItem = new LinkedListItem(previousItem, itemToModify, data)

      previousItem.next = newItem
      itemToModify.previous = newItem
    }
  }

  removeByIndex (index) {
    const itemToModify = this._find(index)
    const previousItem = itemToModify.previous

    previousItem.next = itemToModify.next
    itemToModify.next = previousItem
  }

  *[Symbol.iterator]() {
    let currentItem = this._head
    if (currentItem) {
      do {
        yield currentItem.data
        currentItem = currentItem.next
      } while (currentItem !== this._head)
    }
  }

  _addFirstElement (data) {
    this._head = new LinkedListItem(null, null, data)
    this._head.previous = this._head
    this._head.next = this._head
  }

  _find (index) {
    let result = this._head
    for (let i=0; i<=index; i++) {
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
