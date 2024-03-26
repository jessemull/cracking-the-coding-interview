// We can create a helper and find all the nodes without any dependencies and build those first.
// Once we've done that, we can remove all the dependencies in the graph for the build packages.
// Then rinse and repeat.
// If at the end we've visited all the nodes, there is a build order.

const graph = {
  'a': ['f'],
  'b': ['f'],
  'c': ['d'],
  'd': ['a', 'b'],
  'e': [],
  'f': []
}

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

const main = () => {
  console.log(buildOrder(graph))
}

main()