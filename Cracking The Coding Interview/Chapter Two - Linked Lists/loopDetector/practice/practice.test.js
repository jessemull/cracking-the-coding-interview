const assert = require('node:assert')
const LinkedList = require('../../../Data Structures/linked-list')
const loopDetector = require('./practice')
const test = require('node:test')

test(`loopDetector - [1, 2, 3, 4, 5] - Cycle at 3.`, () => {
  const list = LinkedList.createCycle([1, 2, 3, 4, 5], 3)
  const output = loopDetector(list)
  assert.deepEqual(output, true)
})

test(`loopDetector - [1, 2, 3, 4, 5] - No cycle.`, () => {
  const list = LinkedList.createList([1, 2, 3, 4, 5])
  const output = loopDetector(list)
  assert.deepEqual(output, false)
})