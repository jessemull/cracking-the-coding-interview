const assert = require('node:assert')
const checkBalanced = require('./practice')
const test = require('node:test')
const TreeNode = require('../../../Data Structures/binary-tree-node')
const { makeBalancedTree } = require('../helpers/helpers')

test('checkBalanced - balanced tree', () => {
  const tree = makeBalancedTree([1, 2, 3, 4, 5, 6])
  const output = checkBalanced(tree)
  assert.deepEqual(output, true)
})

test('checkBalanced - unbalanced tree', () => {
  const tree = new TreeNode(1)
  tree.right = new TreeNode(2)
  tree.left = new TreeNode(3)
  tree.right.right = new TreeNode(4)
  tree.right.right.right = new TreeNode(5)
  const output = checkBalanced(tree)
  assert.deepEqual(output, false)
})