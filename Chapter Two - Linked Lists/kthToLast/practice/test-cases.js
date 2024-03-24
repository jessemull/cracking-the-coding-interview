const LinkedList = require('../../../Data Structures/linked-list')

const list1 = LinkedList.createList([1, 2, 3, 4, 5])
const list2 = LinkedList.createList([1, 2, 3, 4, 5, 6, 7, 8])
const list3 = LinkedList.createList([1, 2, 3])

const testCases = [
  { input: [list1, 2], expected: 4 },
  { input: [list2, 4], expected: 5 },
  { input: [list3, 0], expected: 3 }
]

module.exports = testCases