// If we have extra space we can use a hash map and store the entire node and see if it matches.
// 1 -> 2 -> 3 -> 4 -> 5 -> 3
//            \____________/

const LinkedList = require('../../../Data Structures/linked-list')

// We need to gerenate test data

const cycle = LinkedList.createCycle([1, 2, 3, 4, 5], 3)
const noCycle = LinkedList.createList([1, 2, 3, 4, 5])

const hasCycle = (list) => {
  const set = new Set()

  let ptr = list

  while (ptr) {
    if (set.has(ptr)) {
      return true
    } else {
      set.add(ptr)
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
