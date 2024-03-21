const testCases = [
  { input: ['fed', 'def'], expected: true },
  { input: ['a fed', 'def a'], expected: true },
  { input: ['fed', 'den'], expected: false },
  { input: ['fed'], expected: false },
  { input: [undefined, 'fed'], expected: false },
  { input: [null, 'fed'], expected: false },
  { input: ['fed', undefined], expected: false },
  { input: ['fed', null], expected: false },
  { input: [], expected: false }
]

module.exports = testCases