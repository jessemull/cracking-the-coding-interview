const assert = require('node:assert')
const deleteMiddleNode = require('./practice')
const LinkedList = require('../../../Data Structures/linked-list')
const test = require('node:test')

test(`deleteMiddleNode - [[1, 2, 3, 4, 5, 6, 7], 5]`, () => {
  const list = LinkedList.createList([1, 2, 3, 4, 5, 6, 7])
  const node = LinkedList.find(list, 5)
  const expected = LinkedList.createList([1, 2, 3, 4, 6, 7])
  deleteMiddleNode(node, list)
  assert.deepEqual(list, expected)
})

test(`deleteMiddleNode - [[1, 2, 3], 2]`, () => {
  const list = LinkedList.createList([1, 2, 3])
  const node = LinkedList.find(list, 2)
  const expected = LinkedList.createList([1, 3])
  deleteMiddleNode(node, list)
  assert.deepEqual(list, expected)
})

test(`deleteMiddleNode - [[1, 2], 2]`, () => {
  const list = LinkedList.createList([1, 2])
  const node = LinkedList.find(list, 2)
  const expected = LinkedList.createList([1, 2])
  deleteMiddleNode(node, list)
  assert.deepEqual(list, expected)
})