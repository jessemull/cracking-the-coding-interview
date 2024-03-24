const LinkedList = require('../../../Data Structures/linked-list')

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8]

const [list1, list2] = LinkedList.createIntersection(arr1, arr2, arr1[2], arr2[2])

const noIntersection1 = LinkedList.createList(arr1)
const noIntersection2 = LinkedList.createList(arr2)

const testCases = [
  { input: [list1, list2], expected: true },
  { input: [noIntersection1, noIntersection2], expected: false }
]

module.exports = testCases