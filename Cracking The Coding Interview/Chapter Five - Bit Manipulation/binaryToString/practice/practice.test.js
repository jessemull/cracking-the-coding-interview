const assert = require('node:assert')
const binaryToString = require('./practice')
const test = require('node:test')

test('binaryToString - [0.72]', () => { 
  const output = binaryToString(0.72)
  assert.deepEqual(output, '0.10111000010100011110101110000101')
})

test('insertion - [0.143]', () => {
  const output = binaryToString(0.143)
  assert.deepEqual(output, '0.00100100100110111010010111100011')
})

test('insertion - null', () => {
  const output = binaryToString(null)
  assert.deepEqual(output, '')
})
