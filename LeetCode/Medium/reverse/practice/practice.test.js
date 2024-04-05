const assert = require('node:assert')
const reverse = require('./practice')
const test = require('node:test')

test(`reverse - [babad]`, () => {
  const output = reverse(123456789)
  assert.deepEqual(output, 987654321)
})