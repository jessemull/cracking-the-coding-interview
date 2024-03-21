const execute = require('../../../Utilities/execute-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

const isPalindrome = (str) => {

}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(isPalindrome, testCases, chapter, problem)
}

main()