const assert = require('node:assert')
const LinkedList = require('../../../Data Structures/linked-list')
const palindrome = require('./practice')
const test = require('node:test')

test(`palindrome - [1, 2, 3, 2, 1]`, () => {
  const list = LinkedList.createList([1, 2, 3, 2, 1])
  const output = palindrome(list)
  assert.deepEqual(output, true)
})

test(`palindrome - [1, 2, 3, 4, 5]`, () => {
  const list = LinkedList.createList([1, 2, 3, 4, 5])
  const output = palindrome(list)
  assert.deepEqual(output, false)
})

test(`palindrome - [1]`, () => {
  const list = LinkedList.createList([1])
  const output = palindrome(list)
  assert.deepEqual(output, true)
})

test(`palindrome - undefined`, () => {
  const output = palindrome(undefined)
  assert.deepEqual(output, false)
})

test(`palindrome - null`, () => {
  const output = palindrome(null)
  assert.deepEqual(output, false)
})