const assert = require('node:assert')
const LinkedList = require('../../../Data Structures/linked-list')
const sumLists = require('./practice')
const test = require('node:test')

test(`sumLists - [[7, 1, 6], [5, 9]]`, () => {
  const list1 = LinkedList.createList([7, 1, 6])
  const list2 = LinkedList.createList([5, 9])
  const expected = LinkedList.createList([2, 1, 7])
  const output = sumLists(list1, list2)
  assert.deepEqual(output, expected)
})

test(`sumLists - [[4, 6, 8], [1, 3, 1]]`, () => {
  const list1 = LinkedList.createList([4, 6, 8])
  const list2 = LinkedList.createList([1, 3, 1])
  const expected = LinkedList.createList([5, 9, 9])
  const output = sumLists(list1, list2)
  assert.deepEqual(output, expected)
})

test(`sumLists - [[9, 9, 4, 3], [8, 6, 3]]`, () => {
  const list1 = LinkedList.createList([9, 9, 4, 3])
  const list2 = LinkedList.createList([8, 6, 3])
  const expected = LinkedList.createList([7, 6, 8, 3])
  const output = sumLists(list1, list2)
  assert.deepEqual(output, expected)
})

test(`sumLists - [undefined, [7, 1, 6]]`, () => {
  const list1 = LinkedList.createList([7, 1, 6])
  const output = sumLists(undefined, list1)
  assert.deepEqual(output, list1)
})

test(`sumLists - [[7, 1, 6], undefined]`, () => {
  const list1 = LinkedList.createList([7, 1, 6])
  const output = sumLists(list1, undefined)
  assert.deepEqual(output, list1)
})

test(`sumLists - [null, [7, 1, 6]]`, () => {
  const list1 = LinkedList.createList([7, 1, 6])
  const output = sumLists(null, list1)
  assert.deepEqual(output, list1)
})

test(`sumLists - [[7, 1, 6], null]`, () => {
  const list1 = LinkedList.createList([7, 1, 6])
  const output = sumLists(list1, null)
  assert.deepEqual(output, list1)
})

test(`sumLists - [undefined, undefined]`, () => {
  const output = sumLists(undefined, undefined)
  assert.deepEqual(output, undefined)
})