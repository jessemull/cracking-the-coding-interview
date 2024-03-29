const assert = require('node:assert')
const makeBalancedTree = require('./practice')
const test = require('node:test')
const { checkBalanced } = require('../helpers/helpers')


test('makeBalancedTree - [1, 2, 3, 4, 5, 6]', () => {
  const output = makeBalancedTree([1, 2, 3, 4, 5, 6])
  assert.deepEqual(checkBalanced(output), true)
})

test('makeBalancedTree - [8, 12, 43, 54, 55, 67, 88]', () => {
  const output = makeBalancedTree([8, 12, 43, 54, 55, 67, 88])
  assert.deepEqual(checkBalanced(output), true)
})