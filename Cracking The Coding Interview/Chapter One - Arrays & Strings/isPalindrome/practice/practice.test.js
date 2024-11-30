const assert = require('node:assert')
const isPalindrome = require('./practice')
const test = require('node:test')

test(`isPalindrome - abba`, () => {
  const output = isPalindrome('abba')
  assert.deepEqual(output, true)
})

test(`isPalindrome - racecar`, () => {
  const output = isPalindrome('racecar')
  assert.deepEqual(output, true)
})

test(`isPalindrome - Too hot to hoot.`, () => {
  const output = isPalindrome('Too hot to hoot.')
  assert.deepEqual(output, true)
})

test(`isPalindrome - daba`, () => {
  const output = isPalindrome('daba')
  assert.deepEqual(output, false)
})

test(`isPalindrome - undefined`, () => {
  const output = isPalindrome(undefined)
  assert.deepEqual(output, false)
})

test(`isPalindrome - null`, () => {
  const output = isPalindrome(null)
  assert.deepEqual(output, false)
})