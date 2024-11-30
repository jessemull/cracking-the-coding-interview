// Iterating in reverse digit order we need to just keep track of any carry over and add it to the next node.

const LinkedList = require('../../../Data Structures/linked-list')
const Node = require('../../../Data Structures/node')

const list1 = LinkedList.createList([7, 1, 6])
const list2 = LinkedList.createList([5, 9])

const sumLists = (list1, list2) => {
  let sum = new Node(0)
  let ptr = sum
  let carry = 0

  while (list1 || list2) {
    let digit = carry
    if (list1 && list1.data) {
      digit += list1.data
      list1 = list1.next
    }
    if (list2 && list2.data) {
      digit += list2.data
      list2 = list2.next
    }
    carry = digit > 10 ? 1 : 0
    digit = digit % 10
    ptr.next = new Node(digit)
    ptr = ptr.next
  }

  return sum.next
}

const main = () => {
  console.log(LinkedList.printList(sumLists(list1, list2))) // 2 -> 1 -> 7
}

main()