const assert = require('node:assert')
const test = require('node:test')
const { randomNode, RandomTreeNode } = require('./practice')

const root = new RandomTreeNode(16)
root.insert(24)
root.insert(8)
root.insert(20)
root.insert(28)
root.insert(4)
root.insert(12)

const getFirstDigits = (number, x) => {
  while (number >= Math.pow(10, x)) {
      number = Math.floor(number / 10);
  }
  return number;
}

const iterations = 10000000

const expected = getFirstDigits(Math.floor(iterations / root.size / Math.pow(10, 4)) * Math.pow(10, 4), 3)

test('randomNode - should return a random node', () => {
  let map = {}
  for (let i = 0; i < 100000000; i++) {
    const output = randomNode(root)
    map[output] = map[output] ? map[output] + 1 : 1
  }
  Object.keys(map).forEach((key) => {
    assert.deepEqual(expected, getFirstDigits(map[key], 3))
  })
})
