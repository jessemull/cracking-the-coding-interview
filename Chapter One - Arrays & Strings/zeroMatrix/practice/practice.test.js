const assert = require('node:assert')
const zeroMatrix = require('./practice')
const test = require('node:test')

test(`zeroMatrix - [[1, 1, 1], [0, 1, 1], [1, 0, 1]]`, () => {
  const output = zeroMatrix([
    [1, 1, 1], 
    [0, 1, 1],
    [1, 0, 1]
  ])
  assert.deepEqual(
    output,
    [
      [0, 0, 1], 
      [0, 0, 0],
      [0, 0, 0]
    ]
  )
})

test(`zeroMatrix - [[1, 1, 1], [1, 0, 1], [1, 1, 1]]`, () => {
  const output = zeroMatrix([
    [1, 1, 1], 
    [1, 0, 1],
    [1, 1, 1]
  ])
  assert.deepEqual(
    output, 
    [
      [1, 0, 1], 
      [0, 0, 0],
      [1, 0, 1]
    ]
  )
})