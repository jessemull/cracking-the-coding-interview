const assert = require('node:assert')
const twoSum = require('./practice')
const test = require('node:test')

test(`twoSum - [[2,7,11,15], 9]`, () => {
  const output = twoSum([2, 7, 11, 15], 9)
  assert.deepEqual(output.sort(), [0, 1])
})

test(`twoSum - [[3,2,4], 6]`, () => {
  const output = twoSum([3, 2, 4], 6)
  assert.deepEqual(output.sort(), [1, 2])
})

test(`twoSum - [[3, 3], 6]`, () => {
  const output = twoSum([3, 3], 6)
  assert.deepEqual(output.sort(), [0, 1])
})

test(`twoSum - [null, 6]`, () => {
  const output = twoSum(null, 6)
  assert.deepEqual(output, null)
})

test(`twoSum - [[3, 3], null]`, () => {
  const output = twoSum([3, 3], null)
  assert.deepEqual(output, null)
})