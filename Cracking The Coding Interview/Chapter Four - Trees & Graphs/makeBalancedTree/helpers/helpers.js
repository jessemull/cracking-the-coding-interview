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

module.exports = {
  checkBalanced
}