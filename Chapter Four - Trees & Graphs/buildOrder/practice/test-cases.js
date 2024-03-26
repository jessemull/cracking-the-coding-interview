const testCases = [
  { 
    input: [{
      'a': ['f'],
      'b': ['f'],
      'c': ['d'],
      'd': ['a', 'b'],
      'e': [],
      'f': []
    }],
    expected: ['e', 'f', 'a', 'b', 'd', 'c']
  },
  {
    input: [{
      'a': ['f', 'd'],
      'b': ['f'],
      'c': ['d'],
      'd': ['a', 'b'],
      'e': [],
      'f': []
    }],
    expected: null
  },
]

module.exports = testCases