// Brute force solution is to keep two pointers.
// One pointer iterates over the list.
// The other pointer at each iteration of the first pointer iterates over the remaining nodes.
// If a duplicate of the first pointer data is found, the node is removed.

const LinkedList = require('../../../Data Structures/linked-list')
const list1 = LinkedList.createList([1, 3, 4, 8, 2, 1, 8, 7])
const list2 = LinkedList.createList([1, 2, 3, 4, 5])
const list3 = LinkedList.createList([1, 1, 1, 1])
const list4 = LinkedList.createList([1])

const removeDupes = (head) => {
  if (!head || !head.data || !head.next) {
    return head
  }

  let ptr1 = head

  while (ptr1 && ptr1.next !== null) {
    const data = ptr1.data
    let ptr2 = ptr1
    while (ptr2 && ptr2.next) {
      if (data === ptr2.next.data) {
        ptr2.next = ptr2.next.next
      } else {
        ptr2 = ptr2.next
      }
    }
    ptr1 = ptr1.next
  }

  return head

}

const main = () => {
  LinkedList.printList(removeDupes(list1)) // 1 -> 3 -> 4 -> 8 -> 2 -> 7
  LinkedList.printList(removeDupes(list2)) // 1 -> 2 -> 3 -> 4 -> 5
  LinkedList.printList(removeDupes(list3)) // 1
  LinkedList.printList(removeDupes(list4)) // 1
  LinkedList.printList(removeDupes(null))  // null
}

main()