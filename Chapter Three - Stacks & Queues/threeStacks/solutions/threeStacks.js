// The only real problem here to figure out is the indexing.
// When we push an item, we need to know the size of the stack. The index will equal (numStacks * size) + stackIndex.
// When we pop an item, we need to do the same but decrement the size first or subtract one.
// Every time we push or pop and item we need to increment or decrement the size of the stack. The sizes are stored in an array.


class MultiStack {
  constructor(numStacks = 3) {
    this.data = []
    this.numStacks = numStacks
    this.sizes = []
    for (let i = 0; i < numStacks; i++) {
      this.sizes.push(0)
    }
  }

  peek(stack) {
    const size = this.sizes[stack]
    const index = (this.numStacks * (size - 1)) + stack
    return this.data[index] || null
  }

  pop(stack) {
    const size = this.sizes[stack]
    const index = (this.numStacks * (size - 1)) + stack
    const item = this.data[index]
    this.data[index] = undefined
    this.sizes[stack]--
    return item
  }

  push(stack, data) {
    const size = this.sizes[stack]
    const index = (this.numStacks * size) + stack
    this.data[index] = data
    this.sizes[stack]++
  }

  isEmpty(stack) {
    return this.sizes[stack] === 0
  }

  print() {
    console.log(this.data)
  }
}

const stack = new MultiStack(3)
stack.push(0, 1)
stack.push(0, 2)
stack.push(0, 3)
stack.push(1, 4)
stack.push(1, 5)
stack.push(1, 6)
stack.push(2, 7)
stack.push(2, 8)
stack.push(2, 9)
stack.print()
stack.push(1, 7)
stack.print()
stack.push(0, 4)
stack.print()
stack.pop(0)
stack.print()