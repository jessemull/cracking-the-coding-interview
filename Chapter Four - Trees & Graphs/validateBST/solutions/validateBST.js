// Visit each node and check if the left child is less than the current node and the right child is greater than the current node.

const BinaryTree = require('../../../Data Structures/binary-tree')
const BinarySearchTree = require('../../../Data Structures/binary-search-tree')

const binaryTree = new BinaryTree()
binaryTree.insert(2)
binaryTree.insert(3)
binaryTree.insert(9)
binaryTree.insert(7)
binaryTree.insert(1)
binaryTree.insert(3)
console.log('Binary Tree\n\n')
binaryTree.print()

const binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(1)
binarySearchTree.insert(3)
binarySearchTree.insert(2)
console.log('\n\nBinary Search Tree\n\n')
binarySearchTree.print()

const validateBST = (node) => {
  if (node == null) {
    return true
  } else if (node.left && node.left.data > node.data) {
    return false
  } else if (node.right && node.right.data < node.data) {
    return false
  } else {
    return validateBST(node.left) && validateBST(node.right)
  }
}

const main = () => {
  console.log(validateBST(binaryTree.root))       // false
  console.log(validateBST(binarySearchTree.root)) // true
}

main()
