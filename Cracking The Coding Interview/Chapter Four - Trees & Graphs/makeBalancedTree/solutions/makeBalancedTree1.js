const BinarySearchTree = require('../../../Data Structures/binary-search-tree')
const TreeNode = require('../../../Data Structures/binary-tree-node')

// Idea here is that we are given a sorted list in ascending order and create a balanced tree.
// Make the middle most data point the root.
// Add the data point to the left of the middle to the left side of the tree.
// Add the data point to the right of the middle to the right side of the tree.
// Recurse.

// This solution just assume we have an unbalanced binary search tree we can use and insert nodes into.
// This does not match the answer in cracking the code interview but works. Please see other solutions.

// [1, 2, 3, 4]  4 / 2 = 2 -> 3
// [1, 2, 3]     3 / 2 = 1.5 -> 1

const balancedTree = (arr, startIndex, endIndex) => {
  if (endIndex < startIndex) return null 
  const middle = Math.floor((endIndex + startIndex) / 2)
  const node = new TreeNode(arr[middle])
  node.left = balancedTree(arr, startIndex, middle - 1)
  node.right = balancedTree(arr, middle + 1, endIndex)
  return node
}

const makeBalancedTree = (arr) => {
  return balancedTree(arr, 0, arr.length - 1)
}

const root = makeBalancedTree([1, 2, 3, 4, 5, 6, 7])
const tree = new BinarySearchTree(root)

console.log(tree.toString())