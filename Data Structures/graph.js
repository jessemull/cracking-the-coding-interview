// BFS === Queue
// DFS === Stack

const graph = {
  A: ['B', 'C', 'E'],
  B: ['A', 'C', 'D'],
  C: ['A', 'B', 'E'],
  D: ['B'],
  E: ['A', 'C']
}

const dfs = (graph, start) => {
  const stack = [start]
  const visited = new Set()
  const result = []
  while (stack.length) {
    const next = stack.pop()
    if (!visited.has(next)) {
      visited.add(next)
      result.push(next)
      for (let i = 0; i < graph[next].length; i++) {
          stack.push(graph[next][i])
        
      }
    }
  }
  return result
}

const bfs = (graph, start) => {
  const queue = [start]
  const visited = new Set()
  const result = []
  while (queue.length !== 0) {
    const next = queue.pop()
    if (!visited.has(next)) {
      result.push(next)
      visited.add(next)
      for (let i = 0; i < graph[next].length; i++) {
        queue.unshift(graph[next][i])
      }
    }
  }
  return result
}

module.exports = {
  bfs,
  dfs,
  graph
}