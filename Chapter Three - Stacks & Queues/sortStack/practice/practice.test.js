const assert = require('node:assert')
const sortStack = require('./practice')
const Stack = require('../../../Data Structures/stack')
const test = require('node:test')

test(`sortStack - [1, 3, 2, 5, 7, 100, 23, 51, 6, 4, 4]`, () => {
  const output = sortStack(new Stack([1, 3, 2, 5, 7, 100, 23, 51, 6, 4, 4]))
  assert.deepEqual(output, new Stack([1, 2, 3, 4, 4, 5, 6, 7, 23, 51, 100]))
})