const assert = require('node:assert')
const stringCompression = require('./practice')
const test = require('node:test')

test(`stringCompression - aabbccc`, () => {
  const output = stringCompression('aabbccc')
  assert.deepEqual(output, 'a2b2c3')
})

test(`stringCompression - aa`, () => {
  const output = stringCompression('aa')
  assert.deepEqual(output, 'aa')
})

test(`stringCompression - aabb`, () => {
  const output = stringCompression('aabb')
  assert.deepEqual(output, 'aabb')
})

test(`stringCompression - aaabb`, () => {
  const output = stringCompression('aaabb')
  assert.deepEqual(output, 'a3b2')
})

test(`stringCompression - undefined`, () => {
  const output = stringCompression(undefined)
  assert.deepEqual(output, undefined)
})

test(`stringCompression - null`, () => {
  const output = stringCompression(null)
  assert.deepEqual(output, null)
})