// This appears to be a trivial problem but it is not. A naive assumption is that we have equaly probability of choosing 
// the current node its left child or its right child. In actuality we need to consider how many children the tree has on 
// each side.
//
// One option is to just convert all of the nodes into an array and then choose one of the items in the array at random.
//
// Another option is to mark all the nodes with an index and then choose one of the indices at random. Then visit each
// node in the tree until the index is found.
//
// For each of the above options, we have to iterate through the entire tree each time and/or add space complexity.
//
// Instead, because of how the problem is worded, we can keep track of the size of the tree underneath each node by
// generating out own tree node class.
//
// Each time a node is added, we simply increment the size. When we need to find a random node, we find the size of
// the left half of the tree and the size of the right half of the tree and then pick a number in between the total
// number of nodes beneath the current one.
//
// If the number is greater than the number of left nodes, we iterate left.
//
// If the number is less than the number of left nodes, we iterate right.
//
// If the number is equal to the number of left nodes we return the current node.
//
// This problem can be further optimized to not call random again each time we iterate but will be left until a later time.

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

class RandomTreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
    this.size = 1
  }

  insert(data) {
    if (data <= this.data) {
      if (this.left === null) {
        this.left = new RandomTreeNode(data)
      } else {
        this.left.insert(data)
      }
    } else {
      if (this.right === null) {
        this.right = new RandomTreeNode(data)
      } else {
        this.right.insert(data)
      }
    }
    this.size++
  }

  getRandomNode() {
    const leftSize = this.left === null ? 0 : this.left.size
    const rightSize = this.right == null ? 0 : this.right.size
    const size = leftSize + rightSize
    const random = getRandomInt(0, size + 1)
    if (random < Math.round(size / 2)) {
      return this.left.getRandomNode()
    } else if (random === size) {
      return this.data
    } else {
      return this.right.getRandomNode()
    }
  }
}

const root = new RandomTreeNode(16)
root.insert(24)
root.insert(8)
root.insert(20)
root.insert(28)
root.insert(4)
root.insert(12)

let result = {}

const main = () => {
  for (let i = 0; i < 10000; i++) {
    const node = root.getRandomNode()
    if (result[node]) {
      result[node]++
    } else {
      result[node] = 1
    }
  }
  console.log(JSON.stringify(result, null ,2))
}

main()