const assert = require('node:assert')
const drawLine = require('./practice')
const test = require('node:test')

test('drawLine - should draw a line', () => {
  const screen = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
  ]                          
  const expected = [
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0]  ]
  const output = drawLine(screen, 16, 4, 12, 1)
  assert.deepEqual(output, expected)
})
