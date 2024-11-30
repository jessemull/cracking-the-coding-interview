const assert = require('node:assert')
const BinarySearchTree = require('../../../Data Structures/binary-search-tree')
const pathsWithSum = require('./practice')
const test = require('node:test')

const tree = new BinarySearchTree()
tree.insert(8)
tree.insert(4)
tree.insert(7)
tree.insert(5)
tree.insert(6)
tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.insert(1)
tree.insert(2)
tree.insert(4)

test('checkSubTree - 11', () => {
  const output = pathsWithSum(tree.root, 11)
  assert.deepEqual(output, 4)
})

test('checkSubTree - 17', () => {
  const output = pathsWithSum(tree.root, 17)
  assert.deepEqual(output, 1)
})

test('checkSubTree - 34', () => {
  const output = pathsWithSum(tree.root, 34)
  assert.deepEqual(output, 0)
})