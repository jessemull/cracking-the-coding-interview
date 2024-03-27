const assert = require('node:assert')
const stringRotation = require('./practice')
const test = require('node:test')

test(`stringRotation - ['bumblebee', 'beebumble']`, () => {
  const output = stringRotation('bumblebee', 'beebumble')
  assert.deepEqual(output, true)
})

test(`stringRotation - ['bumblebee', 'betbumble']`, () => {
  const output = stringRotation('bumblebee', 'betbumble')
  assert.deepEqual(output, false)
})

test(`stringRotation - ['bumblebee', null]`, () => {
  const output = stringRotation('bumblebee', null)
  assert.deepEqual(output, false)
})

test(`stringRotation - [null, 'betbumble']`, () => {
  const output = stringRotation(null, 'betbumble')
  assert.deepEqual(output, false)
})

test(`stringRotation - ['bumblebee', undefined]`, () => {
  const output = stringRotation('bumblebee', undefined)
  assert.deepEqual(output, false)
})

test(`stringRotation - [undefined, 'betbumble']`, () => {
  const output = stringRotation(undefined, 'betbumble')
  assert.deepEqual(output, false)
})

test(`stringRotation - []`, () => {
  const output = stringRotation(undefined, undefined)
  assert.deepEqual(output, false)
})