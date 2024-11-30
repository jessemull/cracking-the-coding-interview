
const assert = require('node:assert')
const BinaryTree = require('../../../Data Structures/binary-tree')
const LinkedList = require('../../../Data Structures/linked-list')
const listOfDepths = require('./practice')
const test = require('node:test')

test('listOfDepths', () => {
  const tree = new BinaryTree()
  tree.insert(1)
  tree.insert(2)
  tree.insert(3)
  tree.insert(5)
  tree.insert(6)
  tree.insert(7)
  tree.insert(4)
  tree.insert(8)
  tree.insert(8)
  const output = listOfDepths(tree)
  assert.deepEqual(
    output, 
    [
      LinkedList.createList([1]),
      LinkedList.createList([2, 3]),
      LinkedList.createList([5, 6]),
      LinkedList.createList([7, 4]), 
      LinkedList.createList([8, 8])
    ]
  )
})