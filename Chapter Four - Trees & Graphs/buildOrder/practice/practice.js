const execute = require('../../../Utilities/execute-test-cases')
const getChapterAndProblem = require('../../../Utilities/chapter-and-problem')
const testCases = require('./test-cases')

// Grab the chapter and problem names.

const { chapter, problem } = getChapterAndProblem(__dirname)

// Implement solution here.

const findAndRemoveNoEdges = (graph, built) => {
  let foundDependencyTOBuild = false

  Object.keys(graph).forEach(key => {
    const filtered = graph[key].filter(dependency => built.indexOf(dependency) === -1)
    if (!filtered.length) {
      foundDependencyTOBuild = true
      built.push(key)
      delete graph[key]
    }
  })

  return foundDependencyTOBuild
}

const buildOrder = (graph) => {
  const built = []

  while (findAndRemoveNoEdges(graph, built)) {}

  if (Object.keys(graph).length === 0) {
    return built
  } else {
    return null
  }
}

// Execute all test cases and print the input, output, expected value and pass/fail.

const main = () => {
  execute(buildOrder, testCases, chapter, problem)
}

main()