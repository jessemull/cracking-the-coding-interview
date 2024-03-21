const testCases = [
  { input: ['abcdefg'], expected: true },
  { input: ['abcbefg'], expected: false },
  { input: [], expected: false },
  { input: [null], expected: false }
]

module.exports = testCases