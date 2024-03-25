const execute = require('../../../Utilities/execute-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')
const Stack = require('../../../Data Structures/stack')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

const sortStack = (stack) => {

}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(sortStack, testCases, chapter, problem)
}

main()