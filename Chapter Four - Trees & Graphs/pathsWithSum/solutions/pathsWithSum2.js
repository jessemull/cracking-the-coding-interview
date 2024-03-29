// To optimize we store each sum in a hash table calculating the running sum.
// At each step, look up the running sum minus the target in the hash table.
// Set the total paths to the count from the hash table.
// If the running sum is equal to the target sum, increment the value in the hash table if it exists.
// If it doesn't exist, set it to one.
// Recurse both left and right.
// Then decrement the value of running sum in the hash table to reverse the changes so that the other nodes don't use it.

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
tree.insert(1)
tree.insert(2)
tree.insert(4)
console.log(tree.toString())

const increment = (pathCount, runningSum, delta) => {
  if (pathCount[runningSum]) {
    pathCount[runningSum] += delta
  } else {
    pathCount[runningSum] = delta
  }
}

const countPaths = (root, target, runningSum, pathCount) => {
  if (root === null) return 0

  runningSum += root.data
  let sum = runningSum - target
  let totalPaths = pathCount[sum] || 0
  
  if (runningSum === target) {
    totalPaths++
  }

  increment(pathCount, runningSum, 1)

  totalPaths += countPaths(root.left, target, runningSum, pathCount)
  totalPaths += countPaths(root.right, target, runningSum, pathCount)

  increment(pathCount, runningSum, -1)

  return totalPaths
}

const pathsWithSum = (root, target) => {
  return countPaths(root, target, 0, {})
}

const main = () => {
  console.log(pathsWithSum(tree.root, 11)) // 4
  console.log(pathsWithSum(tree.root, 17)) // 1
  console.log(pathsWithSum(tree.root, 34)) // 0
}

main()