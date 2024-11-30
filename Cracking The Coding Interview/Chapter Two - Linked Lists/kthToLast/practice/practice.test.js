const assert = require('node:assert')
const kthToLast = require('./practice')
const LinkedList = require('../../../Data Structures/linked-list')
const test = require('node:test')

test(`kthToLast - [[1, 2, 3, 4, 5], 2]`, () => {
  const list = LinkedList.createList([1, 2, 3, 4, 5])
  const output = kthToLast(list, 2)
  assert.deepEqual(output, 4)
})

test(`kthToLast - [[1, 2, 3, 4, 5, 6, 7, 8], 4]`, () => {
  const list = LinkedList.createList([1, 2, 3, 4, 5, 6, 7, 8])
  const output = kthToLast(list, 4)
  assert.deepEqual(output, 5)
})

test(`kthToLast - [[1, 2, 3], 3]`, () => {
  const list = LinkedList.createList([1, 2, 3])
  const output = kthToLast(list, 0)
  assert.deepEqual(output, 3)
})