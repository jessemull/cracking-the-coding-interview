const assert = require('node:assert')
const checkPermutation = require('./practice')
const test = require('node:test')

test(`checkPermutation - ['fed', 'def']`, () => {
  const output = checkPermutation('fed', 'def')
  assert.deepEqual(output, true)
})

test(`checkPermutation - ['a fed', 'def a']`, () => {
  const output = checkPermutation('a fed', 'def a')
  assert.deepEqual(output, true)
})

test(`checkPermutation - ['fed', 'den']`, () => {
  const output = checkPermutation('fed', 'den')
  assert.deepEqual(output, false)
})

test(`checkPermutation - ['fed']`, () => {
  const output = checkPermutation('fed')
  assert.deepEqual(output, false)
})

test(`checkPermutation - [undefined, 'fed']`, () => {
  const output = checkPermutation(undefined, 'fed')
  assert.deepEqual(output, false)
})

test(`checkPermutation - [null, 'fed']`, () => {
  const output = checkPermutation(null, 'fed')
  assert.deepEqual(output, false)
})

test(`checkPermutation - ['fed', undefined]`, () => {
  const output = checkPermutation('fed', undefined)
  assert.deepEqual(output, false)
})

test(`checkPermutation - [null, 'fed']`, () => {
  const output = checkPermutation(null, 'fed')
  assert.deepEqual(output, false)
})

test(`checkPermutation - []`, () => {
  const output = checkPermutation()
  assert.deepEqual(output, false)
})
