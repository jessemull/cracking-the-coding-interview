// We can use an array of arrays and each array is a stack but we already did that by creating a stack. Just make an array of stacks.

const Stack = require('../../../Data Structures/stack')

class StackOfPlates {
  constructor(limit = 3) {
    this.limit = limit
    this.stacks = [new Stack()]
  }

  peek() {
    return this.stacks[this.stacks.length - 1].peek()
  }

  pop() {
    const item = this.stacks[this.stacks.length - 1].pop()
    if (this.stacks.length - 1 > 0 && this.stacks[this.stacks.length - 1].isEmpty()) {
      this.stacks.pop()
    }
    return item
  }

  push(data) {
    if (this.stacks[this.stacks.length - 1].size === this.limit) {
      this.stacks.push(new Stack())
    }
    this.stacks[this.stacks.length - 1].push(data)
  }

  isEmpty() {
    return this.stacks.length - 1 === 0 && this.stacks[this.stacks.length - 1].isEmpty()
  }

  numPlates() {
    return this.stacks.length
  }

  print() {
    console.log(JSON.stringify(this.stacks, null, 2))
  }
}

const stack = new StackOfPlates(2)
stack.push(1)
stack.print()
stack.push(2)
stack.print()
stack.push(3)
stack.print()
console.log('peek', stack.peek())
stack.push(4)
stack.print()
console.log('isEmpty', stack.isEmpty())
stack.pop()
stack.print()
stack.pop()
stack.print()
stack.pop()
stack.print()
stack.pop()
console.log('isEmpty', stack.isEmpty())