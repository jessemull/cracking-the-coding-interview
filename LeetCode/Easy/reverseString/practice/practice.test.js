const assert = require('node:assert')
const reverseString = require('./practice')
const test = require('node:test')

test(`reverseString - hello`, () => {
  const output = reverseString('hello')
  assert.deepEqual(output, 'olleh')
})

test(`reverseString - hannah`, () => {
  const output = reverseString('hannah')
  assert.deepEqual(output, 'hannah')
})

test(`reverseString - null`, () => {
  const output = reverseString(null)
  assert.deepEqual(output, null)
})

test(`reverseString - undefined`, () => {
  const output = reverseString(undefined)
  assert.deepEqual(output, undefined)
})