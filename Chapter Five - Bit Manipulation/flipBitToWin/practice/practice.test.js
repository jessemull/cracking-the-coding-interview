const assert = require('node:assert')
const flipBitToWin = require('./practice')
const test = require('node:test')

test('flipBitToWin - [1775]', () => {
  const output = flipBitToWin(1775)
  assert.deepEqual(output, 8)
})

test('flipBitToWin - [9]', () => {
  const output = flipBitToWin(9)
  assert.deepEqual(output, 2)
})

test('flipBitToWin - null', () => {
  const output = flipBitToWin(null)
  assert.deepEqual(output, 0)
})

test('flipBitToWin - 2147483647', () => {
  const output = flipBitToWin(2147483647)
  assert.deepEqual(output, 32)
})
