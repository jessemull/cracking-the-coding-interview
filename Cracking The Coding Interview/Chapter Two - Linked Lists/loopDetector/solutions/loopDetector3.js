// If we just add a flag to every node once it is visited we can just check for the flag. Then we don't need extra space.
// 1 -> 2 -> 3 -> 4 -> 5 -> 3
//            \____________/

const LinkedList = require('../../../Data Structures/linked-list')

// We need to gerenate test data

const cycle = LinkedList.createCycle([1, 2, 3, 4, 5], 3)
const noCycle = LinkedList.createList([1, 2, 3, 4, 5])

const hasCycle = (list) => {
  let ptr = list

  while (ptr) {
    if (ptr.flag === true) {
      return true
    } else {
      ptr.flag = true
      ptr = ptr.next
    }
  }

  return false
}

const main = () => {
  console.log(hasCycle(cycle))   // true
  console.log(hasCycle(noCycle)) // false
}

main()
