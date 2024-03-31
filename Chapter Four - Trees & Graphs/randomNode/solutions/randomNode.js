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