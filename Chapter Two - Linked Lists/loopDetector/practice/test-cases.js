const LinkedList = require('../../../Data Structures/linked-list')

const cycle = LinkedList.createCycle([1, 2, 3, 4, 5], 3)
const noCycle = LinkedList.createList([1, 2, 3, 4, 5])

const testCases = [
  { input: [cycle], expected: true },
  { input: [noCycle], expected: false }
]

module.exports = testCases