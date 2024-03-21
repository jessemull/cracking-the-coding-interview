class Queue {
  constructor(data) {
    this.data = data || []
  }

  add(data) {
    this.data.unshift(data)
  }

  isEmpty() {
    return this.data.length === 0
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  remove() {
    return this.data.shift()
  }
}

module.exports = Queue