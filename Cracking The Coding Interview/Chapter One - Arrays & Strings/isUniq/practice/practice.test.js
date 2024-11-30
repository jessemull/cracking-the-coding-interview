const assert = require('node:assert')
const isUniq = require('./practice')
const test = require('node:test')

test(`isUniq - abcdefg`, () => {
  const output = isUniq('abcdefg')
  assert.deepEqual(output, true)
})

test(`isUniq - abcbefg`, () => {
  const output = isUniq('abcbefg')
  assert.deepEqual(output, false)
})

test(`isUniq - undefined`, () => {
  const output = isUniq(undefined)
  assert.deepEqual(output, false)
})

test(`isUniq - null`, () => {
  const output = isUniq(null)
  assert.deepEqual(output, false)
})