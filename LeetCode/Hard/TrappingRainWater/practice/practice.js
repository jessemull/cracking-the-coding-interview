const execute = require('../../../../Utilities/execute-test-cases')
const getChapterAndProblem = require('../../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

const trappingRainWater = (height) => {
  if (!height || height.length === 0) {
    return null
  }

  let left = 0
  let right = height.length - 1
  let sum = 0
  let leftMax = height[left]
  let rightMax = height[right]

  while (left <= right) {
    leftMax = Math.max(height[left], leftMax)
    rightMax = Math.max(height[right], rightMax)
    if (leftMax < rightMax) {
      sum += leftMax - height[left]
      left++
    } else {
      sum += rightMax - height[right]
      right--
    }
  }

  return sum
}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(trappingRainWater, testCases, chapter, problem)
}

main()