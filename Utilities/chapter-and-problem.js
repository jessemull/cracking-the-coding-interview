const getChapterAndProblem = (dir) => {
  const path = dir.split('/')
  const chapter = path[path.length - 3]
  const problem = path[path.length -2]
  return { chapter, problem }
}

module.exports = getChapterAndProblem