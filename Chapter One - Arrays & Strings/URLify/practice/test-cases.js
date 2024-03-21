const testCases = [
  { input: ['Replace spaces with ampersands and stuff!'], expected: 'Replace%20spaces%20with%20ampersands%20and%20stuff!' },
  { input: ['Replace'], expected: 'Replace' },
  { input: [null], expected: null },
  { input: [undefined], expected: undefined }
]

module.exports = testCases