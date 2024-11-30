// Create two linked lists to return.
// Iterate over the input list and just add nodes by comparing against the partition.

const LinkedList = require("../../../Data Structures/linked-list")
const Node = require("../../../Data Structures/node")

const list = LinkedList.createList([3, 5, 8, 5, 10, 2, 1])

const partition = (list, partition) => {
  if (!list) {
    return []
  }

  let ptr1 = new Node(0)
  let ptr2 = new Node(0)
  let partition1 = ptr1
  let partition2 = ptr2
  let head = list

  while (head) {
    if (head.data < partition) {
      ptr1.next = new Node(head.data)
      ptr1 = ptr1.next
    } else {
      ptr2.next = new Node(head.data)
      ptr2 = ptr2.next
    }
    head = head.next
  }

  return [partition1.next, partition2.next]
}

const main = () => {
  const [partition1, partition2] = partition(list, 5)
  console.log(LinkedList.printList(partition1)) // 3 -> 2 -> 1
  console.log(LinkedList.printList(partition2)) // 5 -> 8 -> 5 -> 10
}

main()