const testCases = [
  { input: ['abba'], expected: true },
  { input: ['racecar'], expected: true },
  { input: ['Too hot to hoot.'], expected: true },
  { input: ['daba'], expected: false },
  { input: [], expected: false },
  { input: [null], expected: false }
]

module.exports = testCases