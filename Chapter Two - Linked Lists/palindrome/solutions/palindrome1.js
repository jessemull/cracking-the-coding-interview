// We could reverse the linked list and then see if it is the same as the original.
// To reverse the linked list an easy way is to iterate over each node and keep track of the previous and current nodes.
// The order matters of how the operations are performed (1) set the next node to current.next (2) then set the current.next to the previous node (3) then the previous node is set to the current node (4) and the current node is set to next.

const LinkedList = require("../../../Data Structures/linked-list")
const list1 = LinkedList.createList([1, 2, 1])

const reverse = (head) => {
  let current = head
  let previous = null
  let next = null

  while(current) {
    next = current.next
    current.next = previous
    previous = current
    current = next
    next = null
  }

  return previous
}

const palindrome = (head) => {
  if (head === null || head.next === null) {
    return true
  }

  const reversed = reverse(head)

  let ptr1 = head
  let ptr2 = reversed

  while (ptr1 && ptr2) {
    if (ptr1.data !== ptr2.data) {
      return false
    }
    ptr1 = ptr1.next
    ptr2 = ptr2.next
  }

  return true
}

const main = () => {
  console.log(palindrome(list1))
}

main()