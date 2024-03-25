// It seems like there must be a better way to do this but we can just push everything onto one stack and then return the last item in the other stack.
// Then we set the other stack as the non-empty stack and repeat.
// Then we can improve slightly by not just pushing everything back onto the first stack until we need to. For adding an item we have to reverse the order if the first stack is empty.
// For 

const Stack = require('../../../Data Structures/stack')

class StackQueue {
  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }

  add(item) {
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop())
    }
    this.stack1.push(item)
  }

  remove() {
    if (!this.stack1.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }

  peek() {
    if (!this.stack1.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.peek()
  }

  isEmpty() {
    return this.stack1.isEmpty()
  }
}

const queue = new StackQueue()
queue.add(1)
console.log(queue.peek(1))    // 1
queue.add(2)
console.log(queue.peek())     // 1
console.log(queue.remove())   // 1 
console.log(queue.remove())   // 2
