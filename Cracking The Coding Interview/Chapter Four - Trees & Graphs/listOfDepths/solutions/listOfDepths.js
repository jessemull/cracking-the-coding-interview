// We just need to visit each node and keep track of the depth at each call.
// Doing this recursively is pretty trivial. We can just increment the depth when we visit each child.

const LinkedList = require('../../../Data Structures/linked-list')
const BinaryTree = require('../../../Data Structures/binary-tree')
const Node = require('../../../Data Structures/node')

const tree = new BinaryTree()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(5)
tree.insert(6)
tree.insert(7)
tree.insert(4)
tree.insert(8)
tree.insert(8)

const depths = (node, depth, lists) => {
  if (node === null) return
  if (!lists[depth]) {
    lists[depth] = new Node(node.data)
  } else {
    lists[depth] = LinkedList.addNode(lists[depth], new Node(node.data))
  }
  if (node.left) {
    depths(node.left, depth + 1, lists)
  }
  if (node.right) {
    depths(node.right, depth + 1, lists)
  }
  return lists
}

const listOfDepths = (tree) => {
  return depths(tree.root, 0, [])
}

const main = () => {
  const lists = listOfDepths(tree)
  console.log(tree.toString())
  lists.forEach(list => console.log(LinkedList.printList(list)))
}

main()