const graph = {
  A: ['E'],
  B: ['C', 'E', 'F'],
  C: ['B', 'D'],
  D: ['C'],
  E: ['A', 'B', 'F'],
  F: ['B', 'E'],
  G: ['H'],
  H: ['G']
}

const dfs = (graph, start, end) => {
  const results = [] // For debugging...
  const visited = new Set()
  const stack = [start]
  while (stack.length) {
    const next = stack.pop()
    if (!visited.has(next)) {
      results.push(next)
      visited.add(next)
      if (results.indexOf(end) > -1) {
        return true
      }
      for (let i = 0; i < graph[next].length; i++) {
        stack.push(graph[next][i])
      }
    }
  }
  return false
}

const main = () => {
  console.log(dfs(graph, 'A', 'F')) // true
  console.log(dfs(graph, 'H', 'A')) // false
}

main()