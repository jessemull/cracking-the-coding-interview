// To do this we should probably somehow keep track of the current min value when we add or remove an item.

class MinStack {
  constructor(data) {
    const min = Math.min(...data)
    this.data = data.map(datum => ({ min, value: datum }))
  }

  get min() {
    return this.data[this.data.length - 1].min
  }

  push(data) {
    const lastMin = this.peek().min
    this.data.push({ min: data < lastMin ? data : lastMin, value: data })
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  isEmpty() {
    return this.data.length === 0
  }
}

const stack = new MinStack([1, 2, 3])
console.log(stack.min) // 1
stack.push(-10)
console.log(stack.min) // -10
stack.pop()
console.log(stack.min) // 1