const assert = require('node:assert')
const largestRectangleInHistogram = require('./practice')
const test = require('node:test')

test(`largestRectangleInHistogram - [2,1,5,6,2,3]`, () => {
  const output = largestRectangleInHistogram([2,1,5,6,2,3])
  assert.deepEqual(output, 10)
})

test(`largestRectangleInHistogram - [2,4]`, () => {
  const output = largestRectangleInHistogram([2,4])
  assert.deepEqual(output, 4)
})

test(`largestRectangleInHistogram - []`, () => {
  const output = largestRectangleInHistogram([])
  assert.deepEqual(output, -1)
})
