const assert = require('node:assert')
const oneAway = require('./practice')
const test = require('node:test')

test(`oneAway - ['abcdefg', 'abcdef']`, () => {
  const output = oneAway('abcdefg', 'abcdef')
  assert.deepEqual(output, true)
})

test(`oneAway - ['abcdefg', 'ahcdefg']`, () => {
  const output = oneAway('abcdefg', 'ahcdefg')
  assert.deepEqual(output, true)
})

test(`oneAway - ['', 'a']`, () => {
  const output = oneAway('', 'a')
  assert.deepEqual(output, true)
})

test(`oneAway - ['abcdefg', 'bcdef']`, () => {
  const output = oneAway('abcdefg', 'bcdef')
  assert.deepEqual(output, false)
})

test(`oneAway - ['abcdefg', 'abcdehi']`, () => {
  const output = oneAway('abcdefg', 'abcdehi')
  assert.deepEqual(output, false)
})
  
test(`oneAway - ['abcdefg', 'ahcdef']`, () => {
  const output = oneAway('abcdefg', 'ahcdef')
  assert.deepEqual(output, false)
})

test(`oneAway - [null, 'ahcdef']`, () => {
  const output = oneAway(null, 'ahcdef')
  assert.deepEqual(output, false)
})

test(`oneAway - ['abcdefg', null]`, () => {
  const output = oneAway('abcdefg', null)
  assert.deepEqual(output, false)
})

test(`oneAway - [undefined, 'ahcdef']`, () => {
  const output = oneAway(undefined, 'ahcdef')
  assert.deepEqual(output, false)
})

test(`oneAway - ['abcdefg', undefined]`, () => {
  const output = oneAway('abcdefg', undefined)
  assert.deepEqual(output, false)
})