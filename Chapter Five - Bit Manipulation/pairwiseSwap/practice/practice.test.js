const assert = require('node:assert')
const pairwiseSwap = require('./practice')
const test = require('node:test')

test('pairwiseSwap - [10]', () => {
  const output = pairwiseSwap(10)
  assert.deepEqual(output, 5)
})

test('pairwiseSwap - [214]', () => {
  const output = pairwiseSwap(214)
  assert.deepEqual(output, 233)
})

test('pairwiseSwap - [185]', () => {
  const output = pairwiseSwap(185)
  assert.deepEqual(output, 118)
})