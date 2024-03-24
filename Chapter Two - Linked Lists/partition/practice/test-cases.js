const LinkedList = require('../../../Data Structures/linked-list')

const list1 = LinkedList.createList([3, 5, 8, 5, 10, 2, 1])
const partition1 = LinkedList.createList([3, 2, 1])
const partition2 = LinkedList.createList([5, 8, 5, 10])

const list2 = LinkedList.createList([7, 4, 5, 2, 1, 9, 8, 6])
const partition3 = LinkedList.createList([1])
const partition4 = LinkedList.createList([7, 4, 5, 2, 9, 8, 6])

const testCases = [
  { input: [list1, 5], expected: [partition1, partition2] },
  { input: [list2, 2], expected: [partition3, partition4] },
  { input: [], expected: [] }
]

module.exports = testCases