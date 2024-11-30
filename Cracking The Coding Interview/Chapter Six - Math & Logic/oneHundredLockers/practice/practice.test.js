const assert = require('node:assert')
const oneHundredLockers = require('./practice')
const test = require('node:test')

test('oneHundredLockers - 100', () => {
  const output = oneHundredLockers(100)
  assert.deepEqual(output, 10)
})

test('oneHundredLockers - 10', () => {
  const output = oneHundredLockers(10)
  assert.deepEqual(output, 3)
})

test('oneHundredLockers - 36', () => {
  const output = oneHundredLockers(36)
  assert.deepEqual(output, 6)
})
