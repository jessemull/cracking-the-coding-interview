const TreeNode = require('../../../Data Structures/binary-tree-node')

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

module.exports = {
  makeBalancedTree
}