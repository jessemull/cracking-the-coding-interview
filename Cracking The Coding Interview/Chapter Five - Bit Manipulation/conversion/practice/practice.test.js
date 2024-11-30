const assert = require('node:assert')
const conversion = require('./practice')
const test = require('node:test')

test('conversion - [5, 6]', () => {
  const output = conversion(5, 6)
  assert.deepEqual(output, 2)
})

test('conversion - [117, 65]', () => {
  const output = conversion(117, 65)
  assert.deepEqual(output, 3)
})

test('conversion - [10115, 9354]', () => {
  const output = conversion(10115, 9354)
  assert.deepEqual(output, 4)
})