const LinkedList = require('../../../Data Structures/linked-list')

const list1 = LinkedList.createList([1, 2, 3, 4, 5, 6, 7])
const node1 = LinkedList.find(list1, 5)
const expected1 = LinkedList.createList([1, 2, 3, 4, 6, 7])

const list2 = LinkedList.createList([1, 2, 3])
const node2 = LinkedList.find(list2, 2)
const expected2 = LinkedList.createList([1, 3])

const list3 = LinkedList.createList([1, 2])
const node3 = LinkedList.find(list2, 2)
const expected3 = LinkedList.createList([1, 2])

const testCases = [
  { input: [node1, list1], expected: expected1 },
  { input: [node2, list2], expected: expected2 },
  { input: [node3, list3], expected: expected3 }
]

module.exports = testCases