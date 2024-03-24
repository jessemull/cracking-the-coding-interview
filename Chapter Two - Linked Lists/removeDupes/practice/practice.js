const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')
const execute = require('../../../Utilities/execute-linked-list-test-cases')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

const removeDupes = (list) => {

}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(removeDupes, testCases, chapter, problem)
}

main()