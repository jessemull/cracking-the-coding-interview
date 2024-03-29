// We have to visit each node in our tree.
// If the node is equal to the root of the sub-tree, we then check if they are equal.
// To check if they are equal, we recurse using the left child and the right child.
// If the node is null, we return true.
// If the nodes are not equal, we return false.

const BinarySearchTree = require('../../../Data Structures/binary-search-tree')

const tree = new BinarySearchTree()
tree.insert(8)
tree.insert(4)
tree.insert(12)
tree.insert(5)
tree.insert(3)
tree.insert(15)
tree.insert(11)

const isSubTree = new BinarySearchTree(tree.find(4))

const isNotSubTree = new BinarySearchTree()
isNotSubTree.insert(4)
isNotSubTree.insert(2)
isNotSubTree.insert(5)

const matchTree = (node1, node2) => {
  if (node1 === null && node2 === null) {
    return true
  }
  if (!node1 || !node2 || node1.data !== node2.data) {
    return false
  }

  return matchTree(node1.left, node2.left) && matchTree(node1.right, node2.right)
}

const checkTree = (node1, node2) => {
  if (node1 === null) {
    return false
  } else if (node1.data === node1.data && matchTree(node1, node2)) {
    return true
  }
  return checkTree(node1.left, node2) || checkTree(node1.right, node2)
}

const checkSubTree = (node1, node2) => {
  if (!node2 || node2 === null) {
    return true
  }
  return checkTree(node1, node2)
}

const main = () => {
  console.log(checkSubTree(tree.root, isSubTree.root))    // true
  console.log(checkSubTree(tree.root, isNotSubTree.root)) // false
}

main()