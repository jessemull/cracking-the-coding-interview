const LinkedList = require('../../../Data Structures/linked-list')

const list1 = LinkedList.createList([7, 1, 6])
const list2 = LinkedList.createList([5, 9])
const expected1 = LinkedList.createList([2, 1, 7])

const list3 = LinkedList.createList([4, 6, 8])
const list4 = LinkedList.createList([1, 3, 1])
const expected2 = LinkedList.createList([5, 9, 9])

const list5 = LinkedList.createList([9, 9, 4, 3])
const list6 = LinkedList.createList([8, 6, 3])
const expected3 = LinkedList.createList([7, 6, 8, 3])

const testCases = [
  { input: [list1, list2], expected: expected1 },
  { input: [list3, list4], expected: expected2 },
  { input: [list5, list6], expected: expected3 },
  { input: [list1, undefined], expected: list1 },
  { input: [undefined, list2], expected: list2 },
  { input: [list1, null], expected: list1 },
  { input: [null, list2], expected: list2 },
  { input: [], expected: [] }
]

module.exports = testCases