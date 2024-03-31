// Start with the root node and check if the two nodes exist.
// If they do not both exist, they have no common ancestor.
// If they do exist, check if they are in the left child's tree or the right child's tree.
// If one is in the left child's tree and one is in the right child's tree, we've found the common ancestor.
// If not, recurse using the child that contains both nodes of interest.
// Repeat until the common ancestor is found.

const BinarySeachTree = require('../../../Data Structures/binary-search-tree')

const tree = new BinarySeachTree()
tree.insert(16)
tree.insert(24)
tree.insert(8)
tree.insert(20)
tree.insert(28)
tree.insert(4)
tree.insert(12)

const toFind1 = tree.find(20)
const toFind2 = tree.find(28)

const findNode = (root, node) => {
  if (root === null) return false
  if (root === node) return true
  return findNode(root.left, node) || findNode(root.right, node)
}

const helper = (root, node1, node2) => {
  if (root == null || root === node1 || root === node2) {
    return root
  }

  const isOnLeft1 = findNode(root.left, node1)
  const isOnLeft2 = findNode(root.left, node2)

  if (isOnLeft1 !== isOnLeft2) {
    return root
  } else if (isOnLeft1 && isOnLeft2) {
    return helper(root.left, node1, node2)
  } else {
    return helper (root.right, node1, node2)
  }
}

const firstCommonAncestor = (root, node1, node2) => {
  if (root == null || !findNode(root, node1) || !findNode(root, node2)) {
    return null
  }
  return helper(root, node1, node2)
}

const main = () => {
  console.log(tree.toString())
  console.log(firstCommonAncestor(tree.root, toFind1, toFind2))
}

main()