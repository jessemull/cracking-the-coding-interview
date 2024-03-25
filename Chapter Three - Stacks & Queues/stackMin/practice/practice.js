const execute = require('../../../Utilities/execute-data-structure-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

class MinStack {
  constructor() {
    this.data = []
  }

  min() {
    return this.data.length !== 0 ? this.data[this.data.length -1].min : null
  }

  push(data) {
    if (this.isEmpty()) {
      this.data.push({ min: data, value: data })
    } else {
      const lastMin = this.peek()
      this.data.push({ min: lastMin < data ? lastMin: data, value: data })
    }
  }

  pop() {
    return !this.isEmpty() ? this.data.pop().value : null
  }

  peek() {
    return !this.isEmpty() ? this.data[this.data.length - 1].value : null
  }

  isEmpty() {
    return this.data.length === 0
  }
}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(new MinStack(), testCases, chapter, problem)
}

main()