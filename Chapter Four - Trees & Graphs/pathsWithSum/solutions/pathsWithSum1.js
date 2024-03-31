// For brute force we can just track the sum as we iterate down the tree.
// Count the paths starting from the root.
// Then recurse using the left and right nodes to count any paths in the children.
// return the total sum of the paths from the root, the paths from the left and the paths from the right.

const BinarySearchTree = require('../../../Data Structures/binary-search-tree')

const tree = new BinarySearchTree()
tree.insert(8)
tree.insert(4)
tree.insert(7)
tree.insert(5)
tree.insert(6)
tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.insert(4)
console.log(tree.toString())

const countPathsWithSum = (root, target, sum) => {
  if (root === null) return 0

  sum += root.data

  let paths = 0

  if (target === sum) {
    paths++
  }

  paths += countPathsWithSum(root.left, target, sum)
  paths += countPathsWithSum(root.right, target, sum)

  return paths
}

const pathsWithSum = (root, target) => {
  if (root === null) return 0

  const pathsFromRoot = countPathsWithSum(root, target, 0)

  const pathsOnLeft = pathsWithSum(root.left, target)
  const pathsOnRight = pathsWithSum(root.right, target)

  return pathsFromRoot + pathsOnLeft + pathsOnRight
}

const main = () => {
  console.log(pathsWithSum(tree.root, 12)) // 2
  console.log(pathsWithSum(tree.root, 17)) // 1
  console.log(pathsWithSum(tree.root, 23)) // 0
}

main()