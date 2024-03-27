const assert = require('node:assert')
const URLify = require('./practice')
const test = require('node:test')

test(`URLify - Replace spaces with ampersands and stuff!`, () => {
  const output = URLify('Replace spaces with ampersands and stuff!')
  assert.deepEqual(output, 'Replace%20spaces%20with%20ampersands%20and%20stuff!')
})

test(`URLify - Replace`, () => {
  const output = URLify('Replace')
  assert.deepEqual(output, 'Replace')
})

test(`URLify - null`, () => {
  const output = URLify(null)
  assert.deepEqual(output, null)
})

test(`URLify - undefined`, () => {
  const output = URLify(undefined)
  assert.deepEqual(output, undefined)
})