const testCases = [
  { 
    expected: [
      { method: 'isEmpty', args: [], expected: (output) => output === true },
      { method: 'push', args: [1], expected: null },
      { method: 'push', args: [2], expected: null },
      { method: 'push', args: [3], expected: null },
      { method: 'isEmpty', args: [], expected: (output) => output === false },
      { method: 'peek', args: [], expected: (output) => output === 3 },
      { method: 'numPlates', args: [], expected: (output) => output === 1 },
      { method: 'push', args: [4], expected: null },
      { method: 'peek', args: [], expected: (output) => output === 4 },
      { method: 'numPlates', args: [], expected: (output) => output === 2 },
      { method: 'push', args: [5], expected: null },
      { method: 'push', args: [6], expected: null },
      { method: 'peek', args: [], expected: (output) => output === 6 },
      { method: 'numPlates', args: [], expected: (output) => output === 2 },
      { method: 'push', args: [7], expected: null },
      { method: 'peek', args: [], expected: (output) => output === 7 },
      { method: 'numPlates', args: [], expected: (output) => output === 3 },
      { method: 'pop', args: [7], expected: (output) => output === 7 },
      { method: 'peek', args: [], expected: (output) => output === 6 },
      { method: 'numPlates', args: [], expected: (output) => output === 2 },
    ]
  }
]

module.exports = testCases
