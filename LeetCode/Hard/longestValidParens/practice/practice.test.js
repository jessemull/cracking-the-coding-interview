const assert = require('node:assert')
const longestValidParens = require('./practice')
const test = require('node:test')

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0

test(`longestValidParens - [(()]`, () => {
  const output = longestValidParens('(()')
  assert.deepEqual(output, 2)
})

test(`longestValidParens - [)()())]`, () => {
  const output = longestValidParens(')()())')
  assert.deepEqual(output, 4)
})

test(`longestValidParens - [({[()]})]`, () => {
  const output = longestValidParens('')
  assert.deepEqual(output, 0)
})
