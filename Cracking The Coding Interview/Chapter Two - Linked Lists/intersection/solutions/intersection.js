// To figure out if there is a shared node we can just check if the last two nodes are the same.
//  1 -> 2 -> 3 -> 4 -> 5
//           /
// 6 -> 7 ->8

const LinkedList = require('../../../Data Structures/linked-list')

// Need to generate test data

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8]

const [list1, list2] = LinkedList.createIntersection(arr1, arr2, arr1[2], arr2[2])

const noIntersection1 = LinkedList.createList(arr1)
const noIntersection2 = LinkedList.createList(arr2)

const intersection = (list1, list2) => {
  let ptr1 = list1
  let ptr2 = list2
  while (ptr1.next !== null) {
    ptr1 = ptr1.next
  }
  while (ptr2.next !== null) {
    ptr2 = ptr2.next
  }
  return ptr1 === ptr2
}

const main = () => {
  console.log(intersection(list1, list2))                     // true
  console.log(intersection(noIntersection1, noIntersection2)) // false
}

main()