const assert = require('node:assert')
const routeBetweenNodes = require('./practice')
const test = require('node:test')

test('listOfDepths - route exists', () => {
  const graph = {
    A: ['E'],
    B: ['C', 'E', 'F'],
    C: ['B', 'D'],
    D: ['C'],
    E: ['A', 'B', 'F'],
    F: ['B', 'E'],
    G: ['H'],
    H: ['G']
  }
  const output = routeBetweenNodes(graph, 'A', 'F')
  assert.deepEqual(output, true)
})

test('listOfDepths - route does not exist', () => {
  const graph = {
    A: ['E'],
    B: ['C', 'E', 'F'],
    C: ['B', 'D'],
    D: ['C'],
    E: ['A', 'B', 'F'],
    F: ['B', 'E'],
    G: ['H'],
    H: ['G']
  }
  const output = routeBetweenNodes(graph, 'H', 'A')
  assert.deepEqual(output, false)
})