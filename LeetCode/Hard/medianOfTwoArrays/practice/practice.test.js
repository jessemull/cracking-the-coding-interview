const assert = require('node:assert')
const medianOfTwoArrays = require('./practice')
const test = require('node:test')

test(`medianOfTwoArrays - [[1, 3], [2]]`, () => {
  const output = medianOfTwoArrays([1, 3], [2])
  assert.deepEqual(output, 2)
})

test(`medianOfTwoArrays - [[1, 2], [3, 4]]`, () => {
  const output = medianOfTwoArrays([1, 2], [3, 4])
  assert.deepEqual(output, 2.5)
})

test(`medianOfTwoArrays - [[0, 0], [0, 0]]`, () => {
  const output = medianOfTwoArrays([0, 0], [0, 0])
  assert.deepEqual(output, 0)
})

test(`medianOfTwoArrays - [[3, 4], []]`, () => {
  const output = medianOfTwoArrays([3, 4], [])
  assert.deepEqual(output, 3.5)
})

test(`medianOfTwoArrays - [null, [3,4]]`, () => {
  const output = medianOfTwoArrays(null, [3, 4])
  assert.deepEqual(output, null)
})

test(`medianOfTwoArrays - [[1, 2], null]`, () => {
  const output = medianOfTwoArrays([1, 2], null)
  assert.deepEqual(output, null)
})

