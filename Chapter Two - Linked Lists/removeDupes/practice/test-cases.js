const LinkedList = require('../../../Data Structures/linked-list')

const list1 = LinkedList.createList([1, 3, 4, 8, 2, 1, 8, 7])
const expected1 = LinkedList.createList([1, 3, 4, 8, 2, 7])

const list2 = LinkedList.createList([1, 2, 3, 4, 5])
const expected2 = LinkedList.createList([1, 2, 3, 4, 5])

const list3 = LinkedList.createList([1, 1, 1, 1])
const expected3 = LinkedList.createList([1])

const list4 = LinkedList.createList([1])
const expected4 = LinkedList.createList([1])

const testCases = [
  { input: [list1], expected: expected1 },
  { input: [list2], expected: expected2 },
  { input: [list3], expected: expected3 },
  { input: [list4], expected: expected4 },
  { input: [], expected: undefined }
]

module.exports = testCases