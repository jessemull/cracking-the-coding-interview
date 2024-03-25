const execute = require('../../../Utilities/execute-data-structure-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')
const Stack = require('../../../Data Structures/stack')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

class StackOfPlates {
  
}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(new StackOfPlates(3), testCases, chapter, problem)
}

main()