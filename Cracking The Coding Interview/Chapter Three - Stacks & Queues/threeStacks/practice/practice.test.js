const testCases = [
  { 
    expected: [
      { method: 'isEmpty', args: [0], expected: (output) => output === true },
      { method: 'isEmpty', args: [1], expected: (output) => output === true },
      { method: 'isEmpty', args: [2], expected: (output) => output === true },
      { method: 'push', args: [0, 1], expected: undefined },
      { method: 'push', args: [0, 2], expected: undefined },
      { method: 'push', args: [0, 3], expected: undefined },
      { method: 'push', args: [1, 4], expected: undefined },
      { method: 'push', args: [1, 5], expected: undefined },
      { method: 'push', args: [1, 6], expected: undefined },
      { method: 'push', args: [2, 7], expected: undefined },
      { method: 'push', args: [2, 8], expected: undefined },
      { method: 'push', args: [2, 9], expected: undefined },
      { method: 'peek', args: [0], expected: (output) => output === 3 },
      { method: 'isEmpty', args: [0], expected: (output) => output === false },
      { method: 'pop', args: [0], expected: (output) => output === 3 },
      { method: 'pop', args: [0], expected: (output) => output === 2 },
      { method: 'pop', args: [0], expected: (output) => output === 1 },
      { method: 'peek', args: [1], expected: (output) => output === 6 },
      { method: 'isEmpty', args: [1], expected: (output) => output === false },
      { method: 'pop', args: [1], expected: (output) => output === 6 },
      { method: 'pop', args: [1], expected: (output) => output === 5 },
      { method: 'pop', args: [1], expected: (output) => output === 4 },
      { method: 'peek', args: [2], expected: (output) => output === 9 },
      { method: 'isEmpty', args: [2], expected: (output) => output === false },
      { method: 'pop', args: [2], expected: (output) => output === 9 },
      { method: 'pop', args: [2], expected: (output) => output === 8 },
      { method: 'pop', args: [2], expected: (output) => output === 7 }
    ]
  }
]

module.exports = testCases

const assert = require('node:assert')
const MultiStack = require('./practice')
const test = require('node:test')

test(`threeStacks`, () => {
  const stack = new MultiStack(3)
  const isEmpty1 = stack.isEmpty(0)
  const isEmpty2 = stack.isEmpty(1)
  const isEmpty3 = stack.isEmpty(2)
  stack.push(0, 1)
  stack.push(0, 2)
  stack.push(0, 3)
  stack.push(1, 4)
  stack.push(1, 5)
  stack.push(1, 6)
  stack.push(2, 7)
  stack.push(2, 8)
  stack.push(2, 9)
  const peek1 = stack.peek(0)
  const isEmpty4 = stack.isEmpty(0)
  const pop1 = stack.pop(0)
  const pop2 = stack.pop(0)
  const pop3 = stack.pop(0)
  const peek2 = stack.peek(1)
  const isEmpty5 = stack.isEmpty(1)
  const pop4 = stack.pop(1)
  const pop5 = stack.pop(1)
  const pop6 = stack.pop(1)
  const peek3 = stack.peek(2)
  const isEmpty6 = stack.isEmpty(2)
  const pop7 = stack.pop(2)
  const pop8 = stack.pop(2)
  const pop9 = stack.pop(2)
  assert.deepEqual(isEmpty1, true)
  assert.deepEqual(isEmpty2, true)
  assert.deepEqual(isEmpty3, true)
  assert.deepEqual(peek1, 3)
  assert.deepEqual(isEmpty4, false)
  assert.deepEqual(pop1, 3)
  assert.deepEqual(pop2, 2)
  assert.deepEqual(pop3, 1)
  assert.deepEqual(peek2, 6)
  assert.deepEqual(isEmpty5, false)
  assert.deepEqual(pop4,6 )
  assert.deepEqual(pop5, 5)
  assert.deepEqual(pop6, 4)
  assert.deepEqual(peek3, 9)
  assert.deepEqual(isEmpty6, false)
  assert.deepEqual(pop7, 9)
  assert.deepEqual(pop8, 8)
  assert.deepEqual(pop9, 7)
})