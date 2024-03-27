const assert = require('node:assert')
const LinkedList = require('../../../Data Structures/linked-list')
const removeDupes = require('./practice')
const test = require('node:test')

test(`removeDupes - [1, 3, 4, 8, 2, 1, 8, 7]`, () => {
  const list = LinkedList.createList([1, 3, 4, 8, 2, 1, 8, 7])
  const expected = LinkedList.createList([1, 3, 4, 8, 2, 7])
  const output = removeDupes(list)
  assert.deepEqual(output, expected)
})

test(`removeDupes - [1, 2, 3, 4, 5]`, () => {
  const list = LinkedList.createList([1, 2, 3, 4, 5])
  const expected = LinkedList.createList([1, 2, 3, 4, 5])
  const output = removeDupes(list)
  assert.deepEqual(output, expected)
})

test(`removeDupes - [1, 1, 1, 1]`, () => {
  const list = LinkedList.createList([1, 1, 1, 1])
  const expected = LinkedList.createList([1])
  const output = removeDupes(list)
  assert.deepEqual(output, expected)
})

test(`removeDupes - [1]`, () => {
  const list = LinkedList.createList([1])
  const expected = LinkedList.createList([1])
  const output = removeDupes(list)
  assert.deepEqual(output, expected)
})

test(`removeDupes - undefined`, () => {
  const output = removeDupes(undefined)
  assert.deepEqual(output, undefined)
})

test(`removeDupes - null`, () => {
  const output = removeDupes(null)
  assert.deepEqual(output, null)
})