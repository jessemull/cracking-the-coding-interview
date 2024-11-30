// To find a loop we iterate along with two pointers.
// One pointer moves one node at a time (slow) the other moves two nodes at a time (fast).
// If both pointers stop, we are done and there is no cycle.
// If they equal each other at any point there is a cycle.
// 1 -> 2 -> 3 -> 4 -> 5 -> 3
//            \____________/
// A tricky part of this problem is that the equality check needs come after moving the pointers otherwise the initial state will return true.

const LinkedList = require('../../../Data Structures/linked-list')

// We need to gerenate test data

const cycle = LinkedList.createCycle([1, 2, 3, 4, 5], 3)
const noCycle = LinkedList.createList([1, 2, 3, 4, 5])

const hasCycle = (list) => {
  let slow = list
  let fast = list
  
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }

  return false
}

const main = () => {
  console.log(hasCycle(cycle))   // true
  console.log(hasCycle(noCycle)) // false
}

main()
