// The digits are stored in reverse order. To perform addition we generally go from right to left anyways.
// This means we just need to keep track of the carry which will be one or zero.
// The numbers can be different lengths, so once the digits run out for one if there are remaining digits 
// we need to continue adding until we reach the end of the longer number.
// If there is a carry at the end, we need to also add a one.

const LinkedList = require("../../../../Data Structures/linked-list")
const Node = require("../../../../Data Structures/node")

const addTwoNumbers = (list1, list2) => {
  if (list1 === null || list1 === undefined || list2 === null || list2 === undefined) {
    return null
  }

  let ptr1 = list1
  let ptr2 = list2
  let carry = 0
  let result = new Node() // Just use dummy node 
  let resultPtr = result

  // Add all the numbers keeping track of the carry.

  while (ptr1 && ptr2) {
    let sum = ptr1.data + ptr2.data + carry
    carry = sum >= 10 ? 1 : 0
    let digit = sum % 10
    resultPtr.next = new Node(digit)
    ptr1 = ptr1.next
    ptr2 = ptr2.next
    resultPtr = resultPtr.next
  }

  // If one number is longer than the other continue adding the carry and dataue.

  if (ptr1 || ptr2) {
    let ptr = ptr1 ? ptr1 : ptr2
    while (ptr) {
      let sum = ptr.data + carry
      carry = sum >= 10 ? 1 : 0
      digit = sum % 10
      resultPtr.next = new Node(digit)
      ptr = ptr.next
      resultPtr = resultPtr.next
    }
  }

  // If there is a leftover carry, add it.

  if (carry) {
    resultPtr.next = new Node(carry)
  }

  // We used a dummy node.

  return result.next
}

const main = () => {
  const list1 = LinkedList.createList([2, 4, 3])
  const list2 = LinkedList.createList([5, 6, 4])
  console.log(LinkedList.toArray(addTwoNumbers(list1, list2))) // [7, 0, 8]
}

main()