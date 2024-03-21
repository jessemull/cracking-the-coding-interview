const testCases = [
  { input: ['abcdefg', 'abcdef'], expected: true },
  { input: ['abcdefg', 'ahcdefg'], expected: true },
  { input: ['', 'a'], expected: true },
  { input: ['abcdefg', 'bcdef'], expected: false },
  { input: ['abcdefg', 'abcdehi'], expected: false },
  { input: ['abcdefg', 'ahcdef'], expected: false },
  { input: [null, 'ahcdef'], expected: false },
  { input: ['abcdefg', null], expected: false },
  { input: [undefined, 'ahcdef'], expected: false },
  { input: ['abcdefg', undefined], expected: false }
  
]

module.exports = testCases