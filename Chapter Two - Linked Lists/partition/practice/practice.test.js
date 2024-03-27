const assert = require('node:assert')
const LinkedList = require('../../../Data Structures/linked-list')
const partition = require('./practice')
const test = require('node:test')

test(`partition - [3, 5, 8, 5, 10, 2, 1]`, () => {
  const list = LinkedList.createList([3, 5, 8, 5, 10, 2, 1])
  const partition1 = LinkedList.createList([3, 2, 1])
  const partition2 = LinkedList.createList([5, 8, 5, 10])
  const output = partition(list, 4)
  assert.deepEqual(output, [partition1, partition2])
})

test(`partition - [7, 4, 5, 2, 1, 9, 8, 6]`, () => {
  const list = LinkedList.createList([7, 4, 5, 2, 1, 9, 8, 6])
  const partition1 = LinkedList.createList([1])
  const partition2 = LinkedList.createList([7, 4, 5, 2, 9, 8, 6])
  const output = partition(list, 2)
  assert.deepEqual(output, [partition1, partition2])
})

test(`partition - undefined`, () => {
  const output = partition(undefined)
  assert.deepEqual(output, [])
})

test(`partition - null`, () => {
  const output = partition(null)
  assert.deepEqual(output, [])
})