const assert = require('node:assert')
const test = require('node:test')
const TwoStackQueue = require('./practice')

test(`queueStack`, () => {
  const queue = new TwoStackQueue()
  const isEmpty1 = queue.isEmpty()
  queue.add(1)
  queue.add(2)
  const isEmpty2 = queue.isEmpty()
  const peek1 = queue.peek()
  const remove1 = queue.remove()
  const peek2 = queue.peek()
  const remove2 = queue.remove()
  const isEmpty3 = queue.isEmpty()
  assert.deepEqual(isEmpty1, true)
  assert.deepEqual(isEmpty2, false)
  assert.deepEqual(peek1, 1)
  assert.deepEqual(remove1, 1)
  assert.deepEqual(peek2, 2)
  assert.deepEqual(remove2, 2)
  assert.deepEqual(isEmpty3, true)
})