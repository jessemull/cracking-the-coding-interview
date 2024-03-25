const testCases = [
  { 
    expected: [
      { method: 'isEmpty', args: [], expected: (output) => output === true },
      { method: 'push', args: [3], expected: null },
      { method: 'isEmpty', args: [], expected: (output) => output === false },
      { method: 'min', args: [], expected: (output) => output === 3 },
      { method: 'peek', args: [], expected: (output) => output === 3 },
      { method: 'push', args: [4], expected: null },
      { method: 'min', args: [], expected: (output) => output === 3 },
      { method: 'peek', args: [], expected: (output) => output === 4 },
      { method: 'push', args: [1], expected: null },
      { method: 'min', args: [], expected: (output) => output === 1 },
      { method: 'pop', args: [], expected: (output) => output === 1 },
      { method: 'min', args: [], expected: (output) => output === 3 },
      { method: 'pop', args: [], expected: (output) => output === 4 },
      { method: 'min', args: [], expected: (output) => output === 3 },
      { method: 'pop', args: [], expected: (output) => output === 3 },
      { method: 'isEmpty', args: [], expected: (output) => output === true },
    ]
  }
]

module.exports = testCases
