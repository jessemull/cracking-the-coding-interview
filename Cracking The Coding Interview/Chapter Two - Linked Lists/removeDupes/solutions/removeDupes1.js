// To remove duplicates we can iterate along the linked list and store all the values in a data structure.
// At each node we check if the data already exists.
// If the node exists already, we delete it.
// If the node doesn't exist already, we leave it and add it to our buffer.
// A tricky part of this problem is that if we remove the node we do not need to set node to node.next as we've already set it to node.next.next.

const LinkedList = require('../../../Data Structures/linked-list')
const list1 = LinkedList.createList([1, 3, 4, 8, 2, 1, 8, 7])
const list2 = LinkedList.createList([1, 2, 3, 4, 5])
const list3 = LinkedList.createList([1, 1, 1, 1])
const list4 = LinkedList.createList([1])

const removeDupes = (head) => {
  if (!head || !head.next || !head.data) return head
  const buffer = new Set([head.data])
  let node = head
  while (node.next !== null) {
    if (buffer.has(node.next.data)) {
      node.next = node.next.next
    } else {
      buffer.add(node.data)
      node = node.next
    }
  }
  return head
}

const main = () => {
  console.log(LinkedList.printList(removeDupes(list1))) // 1 -> 3 -> 4 -> 8 -> 2 -> 7
  console.log(LinkedList.printList(removeDupes(list2))) // 1 -> 2 -> 3 -> 4 -> 5
  console.log(LinkedList.printList(removeDupes(list3))) // 1
  console.log(LinkedList.printList(removeDupes(list4))) // 1
  console.log(LinkedList.printList(removeDupes(null)))  // null
}

main()