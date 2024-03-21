const execute = require('../../../Utilities/execute-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

const checkPermutation = (str1, str2) => {
 
}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(checkPermutation, testCases, chapter, problem)
}

main()