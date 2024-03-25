const testCases = [
  { 
    expected: [
      { method: 'isEmpty', args: [], expected: (output) => output === true },
      { method: 'add', args: [1], expected: null },
      { method: 'add', args: [2], expected: null },
      { method: 'isEmpty', args: [], expected: (output) => output === false },
      { method: 'peek', args: [], expected: (output) => output === 1 },
      { method: 'remove', args: [], expected: (output) => output === 1 },
      { method: 'peek', args: [], expected: (output) => output === 2 },
      { method: 'remove', args: [], expected: (output) => output === 2 },
      { method: 'isEmpty', args: [], expected: (output) => output === true }
    ]
  }
]

module.exports = testCases
