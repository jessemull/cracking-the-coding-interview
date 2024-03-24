// If we can use an additional data structure this problem is trivial. Just iterate over the list and reverse it and then compare for equality.

const LinkedList = require("../../../Data Structures/linked-list")
const list1 = LinkedList.createList([1, 2, 1])

const palindrome = (list) => {
  if (list === null || list.next === null) {
    return true
  }

  const reversed = []

  let ptr1 = list

  while(ptr1) {
    reversed.unshift(ptr1.data)
    ptr1 = ptr1.next
  }

  let ptr2 = list

  while (ptr2) {
    const data = reversed.shift()
    if (ptr2.data !== data) {
      return false
    }
    ptr2 = ptr2.next
  }

  return true
}

const main = () => {
  console.log(palindrome(list1))
}

main()