const assert = require('node:assert')
const longestNoRepeats = require('./practice')
const test = require('node:test')

test(`longestNoRepeats - [abcabcbb]`, () => {
  const output = longestNoRepeats('abcabcbb')
  assert.deepEqual(output, 3)
})

test(`longestNoRepeats - [bbbbb]`, () => {
  const output = longestNoRepeats('bbbbb')
  assert.deepEqual(output, 1)
})

test(`longestNoRepeats - [pwwkew]`, () => {
  const output = longestNoRepeats('pwwkew')
  assert.deepEqual(output, 3)
})

test(`longestNoRepeats - [ ]`, () => {
  const output = longestNoRepeats(' ')
  assert.deepEqual(output, 1)
})

test(`longestNoRepeats - [null]`, () => {
  const output = longestNoRepeats(null)
  assert.deepEqual(output, 0)
})