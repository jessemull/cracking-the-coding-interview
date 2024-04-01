const assert = require('node:assert')
const insertion = require('./practice')
const test = require('node:test')
const { decimalToBinaryStr } = require('../../review/commonBitTasks')

test('insertion - [1024, 19, 2, 6]', () => {
  const num1 = 1024                           // 10000000000
  const num2 = 19                             // 10011
  const expected = 1100                       // 10001001100
  const output = insertion(num1, num2, 2, 6)
  assert.deepEqual(output, expected)
})

test('insertion - [1024, 19, -1, 6]', () => {
  const output = insertion()
  assert.deepEqual(output, 0)
})

test('insertion - [1024, 19, 2, 33]', () => {
  const output = insertion()
  assert.deepEqual(output, 0)
})

test('insertion - [1024, 19, 6, 2]', () => {
  const output = insertion()
  assert.deepEqual(output, 0)
})
