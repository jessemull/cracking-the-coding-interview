// In a balanced tree the difference between the heights of the left and right trees cannot be more than one.
// Find the difference in heights between the left and right children.
// If the absolute difference is greater than one, return false. The tree isn't balanced.
// Otherwise recurse using both the left and right children.
// To find the height, return -1 for the base case when the node is null.
// Otherwise recurse, finding the maximum value between the height of the left node and right node, incrementing the height each time by one.

const TreeNode = require('../../../Data Structures/binary-tree-node')
const makeBalancedTree = require('../helpers/helpers')

const balanced = makeBalancedTree([1, 2, 3, 4, 5, 6, 7])

const unbalanced = new TreeNode(1)
unbalanced.right = new TreeNode(2)
unbalanced.left = new TreeNode(3)
unbalanced.right.right = new TreeNode(4)
unbalanced.right.right.right = new TreeNode(5)

const getHeight = (node) => {
  if (node === null) {
    return -1
  }
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}

const checkBalanced = (root) => {
  if (root === null) {
    return true
  }
  const difference = getHeight(root.left) - getHeight(root.right)
  if (Math.abs(difference) > 1) {
    return false
  } else {
    return checkBalanced(root.left) && checkBalanced(root.right)
  }
}

const main = () => {
  console.log(checkBalanced(balanced)) // true
  console.log(checkBalanced(unbalanced)) // false
}

main()