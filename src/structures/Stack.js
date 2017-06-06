class StackItem {
  constructor (previousItem, data) {
    this.data = data
    this.previousItem = previousItem
  }
}

export default class Stack {
  constructor () {
    this._lastItem = null
  }

  isEmpty () {
    return !this._lastItem
  }

  get lastItem () {
    return this._lastItem.data
  }

  push (data) {
    this._lastItem = new StackItem(this._lastItem, data)
  }

  pop () {
    const dataToReturn = this._lastItem.data

    if (dataToReturn.cleanUp) {
      dataToReturn.cleanUp()
    }

    this._lastItem = this._lastItem.previousItem
    return dataToReturn
  }

  getByIndex (index) {
    let result = this._lastItem
    for (let i = 0; i <= index; i++) {
      if (result === null) {
        throw new Error('Invalid index')
      } else if (i === index) {
        break
      } else {
        result = result.previousItem
      }
    }

    return result.data
  }

  *[Symbol.iterator] () {
    let currentItem = this._lastItem
    while (currentItem) {
      yield currentItem.data
      currentItem = currentItem.previousItem
    }
  }
}
