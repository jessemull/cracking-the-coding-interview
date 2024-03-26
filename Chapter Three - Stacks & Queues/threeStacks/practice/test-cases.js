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