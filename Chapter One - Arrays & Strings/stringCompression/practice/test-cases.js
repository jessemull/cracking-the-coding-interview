const testCases = [
  { input: ['aabbccc'], expected: 'a2b2c3' },
  { input: ['aa'], expected: 'aa' },
  { input: ['aabb'], expected: 'aabb' },
  { input: ['aaabb'], expected: 'a3b2' },
  { input: [], expected: undefined },
  { input: [null], expected: null },
  { input: [undefined], expected: undefined }
]

module.exports = testCases