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

const bfs = (graph, start, end) => {
  const results = [] // For debugging...
  const visited = new Set()
  const queue = [start]
  while (queue.length) {
    const next = queue.shift()
    if (!visited.has(next)) {
      results.push(next)
      visited.add(next)
      if (results.indexOf(end) > -1) {
        return true
      }
      for (let i = 0; i < graph[next].length; i++) {
        queue.push(graph[next][i])
      }
    }
  }
  return false
}

const main = () => {
  console.log(bfs(graph, 'A', 'F')) // true
  console.log(bfs(graph, 'H', 'A')) // false
}

main()