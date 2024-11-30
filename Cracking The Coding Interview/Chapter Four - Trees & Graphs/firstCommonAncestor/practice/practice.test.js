const assert = require('node:assert')
const BinarySearchTree = require('../../../Data Structures/binary-search-tree')
const firstCommonAncestor = require('./practice')
const test = require('node:test')
const TreeNode = require('../../../Data Structures/binary-tree-node')

const tree = new BinarySearchTree()
tree.insert(16)
tree.insert(24)
tree.insert(8)
tree.insert(20)
tree.insert(28)
tree.insert(4)
tree.insert(12)

test('firstCommonAncestor - 24 -> 20/28', () => {
  const toFind1 = tree.find(20)
  const toFind2 = tree.find(28)
  const expected = tree.find(24)
  const output = firstCommonAncestor(tree.root, toFind1, toFind2)
  assert.deepEqual(output, expected)
})

test('firstCommonAncestor - 8 -> 4/12', () => {
  const toFind1 = tree.find(4)
  const toFind2 = tree.find(12)
  const expected = tree.find(8)
  const output = firstCommonAncestor(tree.root, toFind1, toFind2)
  assert.deepEqual(output, expected)
})

test('firstCommonAncestor - no common ancestor', () => {
  const toFind1 = tree.find(4)
  const output = firstCommonAncestor(tree.root, toFind1, new TreeNode(12))
  assert.deepEqual(output, null)
})