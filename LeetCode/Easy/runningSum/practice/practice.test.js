const assert = require('node:assert')
const runningSum = require('./practice')
const test = require('node:test')

test(`runningSum - [1, 1, 4, 5, 7, 8, 11, 4]`, () => {
  const output = runningSum([1, 1, 4, 5, 7, 8, 11, 4])
  assert.deepEqual(output, [1, 2, 6, 11, 18, 26, 37, 41])
})