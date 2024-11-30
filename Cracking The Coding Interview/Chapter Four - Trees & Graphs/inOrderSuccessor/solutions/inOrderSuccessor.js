// The in order successor is the smallest value (left most node) of the right child.

const BinarySearchTree = require('../../../Data Structures/binary-search-tree')

const tree = new BinarySearchTree()
tree.insert(6)
tree.insert(5)
tree.insert(1)
tree.insert(10)
tree.insert(2)
tree.insert(4)
tree.insert(9)
tree.insert(8)
tree.print()

const findInOrderSuccessor = (node) => {
  if (node.right === null) return null
  let ptr = node.right
  while (ptr.left !== null) {
    ptr = ptr.left
  }
  return ptr.data
}

const main = () => {
  console.log(findInOrderSuccessor(tree.root)) // 8
}

main()
