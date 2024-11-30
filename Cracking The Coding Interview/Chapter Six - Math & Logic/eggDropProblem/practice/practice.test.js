const assert = require('node:assert')
const eggDropProblem = require('./practice')
const test = require('node:test')

test('eggDropProblem - 14', () => {
  const output = eggDropProblem(14, 100)
  assert.deepEqual(output, 1)
})

test('eggDropProblem - 15', () => {
  const output = eggDropProblem(15, 100)
  assert.deepEqual(output, 3)
})

test('eggDropProblem - 78', () => {
  const output = eggDropProblem(78, 100)
  assert.deepEqual(output, 9)
})
