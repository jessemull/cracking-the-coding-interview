const assert = require('node:assert')
const longestPalindromicSubstring = require('./practice')
const test = require('node:test')

test(`longestPalindromicSubstring - [babad]`, () => {
  const output = longestPalindromicSubstring('babad')
  assert.deepEqual(output, 'bab')
})

test(`longestPalindromicSubstring - [cbbd]`, () => {
  const output = longestPalindromicSubstring('cbbd')
  assert.deepEqual(output, 'bb')
})


test(`longestPalindromicSubstring - [null]`, () => {
  const output = longestPalindromicSubstring(null)
  assert.deepEqual(output, '')
})

