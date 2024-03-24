const LinkedList = require('../../../Data Structures/linked-list')

const palindrome = LinkedList.createList([1, 2, 3, 2, 1])
const nonPalindrome = LinkedList.createList([1, 2, 3, 4, 5])
const node = LinkedList.createList([1])

const testCases = [
  { input: [palindrome], expected: true },
  { input: [nonPalindrome], expected: false },
  { input: [], expected: false },
  { input: [node], expected: true }
]

module.exports = testCases