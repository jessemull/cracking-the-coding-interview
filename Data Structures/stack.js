class Stack {
  constructor(data) {
    this.data = data || []
    this.size = data && data.length ? data.length : 0
  }

  push(data) {
    this.size++
    this.data.push(data)
  }

  pop() {
    this.size--
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  isEmpty() {
    return this.data.length === 0
  }
}

module.exports = Stack