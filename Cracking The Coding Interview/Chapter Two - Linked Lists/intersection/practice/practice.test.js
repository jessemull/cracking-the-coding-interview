const assert = require('node:assert')
const intersection = require('./practice')
const LinkedList = require('../../../Data Structures/linked-list')
const test = require('node:test')

test(`intersection - [[1, 2, 3, 4, 5], [6, 7, 8]] - Intersection at 3.`, () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [6, 7, 8]
  const [list1, list2] = LinkedList.createIntersection(arr1, arr2, arr1[2], arr2[2])
  const output = intersection(list1, list2)
  assert.deepEqual(output, true)
})

test(`intersection - [[1, 2, 3, 4, 5], [6, 7, 8]] - No intersection.`, () => {
  const arr1 = [1, 2, 3, 4, 5]
  const arr2 = [6, 7, 8]
  const list1 = LinkedList.createList(arr1)
  const list2 = LinkedList.createList(arr2)
  const output = intersection(list1, list2)
  assert.deepEqual(output, false)
})
