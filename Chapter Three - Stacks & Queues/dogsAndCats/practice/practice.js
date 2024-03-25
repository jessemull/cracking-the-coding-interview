const execute = require('../../../Utilities/execute-data-structure-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const Queue = require('../../../Data Structures/queue')
const testCases = require('./test-cases')
const {
  ANIMAL_TYPES
} = require('../helpers/helpers')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

class AnimalQueue {
  
}


// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(new AnimalQueue(), testCases, chapter, problem)
}

main()