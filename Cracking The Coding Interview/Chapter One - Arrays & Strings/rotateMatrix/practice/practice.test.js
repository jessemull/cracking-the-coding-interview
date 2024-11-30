const assert = require('node:assert')
const rotateMatrix = require('./practice')
const test = require('node:test')

test(`rotateMatrix - [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`, () => {
  const output = rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
  assert.deepEqual(
    output,
    [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7]
    ]
  )
})

test(`rotateMatrix - [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]`, () => {
  const output = rotateMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]
  )
  assert.deepEqual(
    output,
    [
      [4, 8, 12, 16],
      [3, 7, 11, 15],
      [2, 6, 10, 14],
      [1, 5, 9, 13]
    ]
  )
})