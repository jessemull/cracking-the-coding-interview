const assert = require('node:assert')
const nextNumber = require('./practice')
const test = require('node:test')

test('nextNumber - [13948]', () => {
  const num = 13948 // 11011001111100
  const output = nextNumber(num)
  assert.deepEqual(output, [13946, 13967])
})
