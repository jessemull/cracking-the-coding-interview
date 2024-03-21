const testCases = [
  { 
    input: [
      [1, 1, 1], 
      [0, 1, 1],
      [1, 0, 1]
    ], 
    expected: [
      [0, 0, 1], 
      [0, 0, 0],
      [0, 0, 0]
    ] 
  },
  { 
    input: [
      [1, 1, 1], 
      [1, 0, 1],
      [1, 1, 1]
    ], 
    expected: [
      [1, 0, 1], 
      [0, 0, 0],
      [1, 0, 1]
    ] 
  },
]

module.exports = testCases