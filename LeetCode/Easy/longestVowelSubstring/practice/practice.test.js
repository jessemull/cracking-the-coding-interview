const assert = require('node:assert')
const longestVowelSubstring = require('./practice')
const test = require('node:test')

test(`longestVowelSubstring - geeksforgeeks`, () => {
  const output = longestVowelSubstring('geeksforgeeks')
  assert.deepEqual(output, 2)
})

test(`longestVowelSubstring - theeare`, () => {
  const output = longestVowelSubstring('theeare')
  assert.deepEqual(output, 3)
})

test(`longestVowelSubstring - null`, () => {
  const output = longestVowelSubstring(null)
  assert.deepEqual(output, 0)
})

test(`longestVowelSubstring - undefined`, () => {
  const output = longestVowelSubstring(undefined)
  assert.deepEqual(output, 0)
})