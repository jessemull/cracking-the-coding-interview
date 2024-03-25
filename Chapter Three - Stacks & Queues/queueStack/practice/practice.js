const execute = require('../../../Utilities/execute-data-structure-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const Stack = require('../../../Data Structures/stack')
const testCases = require('./test-cases')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

class TwoStackQueue {

}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(new TwoStackQueue(), testCases, chapter, problem)
}

main()