const assert = require('node:assert')
const buildOrder = require('./practice')
const test = require('node:test')

test('buildOrder - should return build order', () => {
  const graph = {
    'a': ['f'],
    'b': ['f'],
    'c': ['d'],
    'd': ['a', 'b'],
    'e': [],
    'f': []
  }
  const output = buildOrder(graph)
  assert.deepEqual(output, [ 'e', 'f', 'a', 'b', 'd', 'c' ])
})

test('buildOrder - should return null if there is no build order', () => {
  const graph = {
    'a': ['f', 'd'],
    'b': ['f'],
    'c': ['d'],
    'd': ['a', 'b'],
    'e': [],
    'f': []
  }
  const output = buildOrder(graph)
  assert.deepEqual(
    output, 
    null
  )
})