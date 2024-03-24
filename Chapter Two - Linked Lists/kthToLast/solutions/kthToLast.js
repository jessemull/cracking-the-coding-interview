/**
 * This looks non-trivial but if we are clever we can set two pointers and have one go ahead by kth nodes.
 * 
 * When the second pointer ahead by kth nodes hits the last node, it means the first pointer is pointing at the right node.
 * 
 * If we are hunting for the last node we have a special case. We need to check if the pointers equal each other as they
 * will both be at the last node.
 */

const LinkedList = require('../../Data Structures/linked-list')
const list1 = LinkedList.createList([1, 2, 3, 4, 5, 6, 7])
const list2 = LinkedList.createList([1])

const kthToLast = (head, k) => {
  if (!head || !head.next) {
    return head.data || null
  }

  let ptr1 = head
  let ptr2 = head

  for (let i = 0; i < k; i++) {
    ptr2 = ptr2.next
  }

  while (ptr2.next !== null) {
    ptr1 = ptr1.next
    ptr2 = ptr2.next
  }

  return ptr1 === ptr2 ? ptr1.data : ptr1.next.data
}

const main = () => {
  console.log(kthToLast(list1, 2)) // 6
  console.log(kthToLast(list1, 0)) // 7
  console.log(kthToLast(list2, 0)) // 1
  console.log(kthToLast(list1, 100)) // null
}

main()