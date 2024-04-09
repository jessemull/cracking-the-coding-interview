const assert = require('node:assert')
const validParens = require('./practice')
const test = require('node:test')

test(`validParens - [()]`, () => {
  const output = validParens('()')
  assert.deepEqual(output, true)
})

test(`validParens - [()[]{}]`, () => {
  const output = validParens('()[]{}')
  assert.deepEqual(output, true)
})

test(`validParens - [({[()]})]`, () => {
  const output = validParens('({[()]})')
  assert.deepEqual(output, true)
})

test(`validParens - [(]]`, () => {
  const output = validParens('(]')
  assert.deepEqual(output, false)
})