// At first it looks like we would need to have the node before this one to delet the node because that is how most removal algorithms work.
// Instead, we can just make the input node be equal to node.next and delete node.next.

const LinkedList = require('../../../Data Structures/linked-list')

const deleteMiddleNode = (node) => {
  if (!node.next) {
    return
  }
  node.data = node.next.data
  node.next = node.next.next
}

const main = () => {
  const list1 = LinkedList.createList([1, 2, 3, 4, 5, 6, 7])
  const node = LinkedList.find(list1, 3)
  deleteMiddleNode(node)
  LinkedList.printList(list1)
}

main()