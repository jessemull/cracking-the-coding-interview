const assert = require('node:assert')
const addTwoNumbers = require('./practice')
const LinkedList = require('../../../../Data Structures/linked-list')
const test = require('node:test')

test(`addTwoNumbers - [[2, 4, 3], [5, 6, 4]]`, () => {
  const list1 = LinkedList.createList([2, 4, 3])
  const list2 = LinkedList.createList([5, 6, 4])
  const output = addTwoNumbers(list1, list2)
  assert.deepEqual(LinkedList.toArray(output), [7, 0, 8])
})

test(`addTwoNumbers - [[0], [0]]`, () => {
  const list1 = LinkedList.createList([0])
  const list2 = LinkedList.createList([0])
  const output = addTwoNumbers(list1, list2)
  assert.deepEqual(LinkedList.toArray(output), [0])
})

test(`addTwoNumbers - [[9,9,9,9,9,9,9], [9,9,9,9]]`, () => {
  const list1 = LinkedList.createList([9,9,9,9,9,9,9])
  const list2 = LinkedList.createList([9,9,9,9])
  const output = addTwoNumbers(list1, list2)
  assert.deepEqual(LinkedList.toArray(output), [8, 9, 9, 9, 0, 0, 0, 1])
})

test(`addTwoNumbers - [null, [5, 6, 4]]`, () => {
  const list = LinkedList.createList([5, 6, 4])
  const output = addTwoNumbers(null, list)
  assert.deepEqual(output, null)
})

test(`addTwoNumbers - [[2, 4, 3], null]`, () => {
  const list = LinkedList.createList([2, 4, 3])
  const output = addTwoNumbers(list, null)
  assert.deepEqual(output, null)
})