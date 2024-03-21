// Parent (i - 1) / 2
// Right (i * 2) + 1
// Left (i * 2) + 2

class MaxHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1
  }

  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2
  }

  hasParent(childIndex) {
    return Boolean(this.heap[this.getParentIndex(childIndex)])
  }

  hasLeftChild(parentIndex) {
    return Boolean(this.heap[this.getLeftChildIndex(parentIndex)])
  }

  hasRightChild(parentIndex) {
    return Boolean(this.heap[this.getRightChildIndex(parentIndex)])
  }

  getParent(childIndex) {
    return this.heap[this.getParentIndex(childIndex)]
  }

  add(data) {
    this.heap.push(data)
    let index = this.heap.length - 1
    let current = this.heap[index]

    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      const parent = this.getParent(index)
      if (parent < current) {
        this.heap[parentIndex] = current
        this.heap[index] = parent
        index = parentIndex
      } else {
        break
      }
    }
  }

  swap(index1, index2) {
    let temp = this.heap[index2]
    this.heap[index2] = this.heap[index1]
    this.heap[index1] = temp
  }

  /** 
   * Step 1 - Swap the root node with last node in max heap
   * Step 2 - Delete last node.
   * Step 3 - Now, compare root value with its left child value.
   * Step 4 - If root value is smaller than its left child, then compare left child with its right sibling. Else goto Step 6
   * Step 5 - If left child value is larger than its right sibling, then swap root with left child otherwise swap root with its right child.
   * Step 6 - If root value is larger than its left child, then compare root value with its right child value.
   * Step 7 - If root value is smaller than its right child, then swap root with right child otherwise stop the process.
   * Step 8 - Repeat the same until root node fixes at its exact position.
   */
  remove() {
    this.swap(this.heap.length - 1, 0)
    const max = this.heap.pop()
    let index = 0
    while (this.hasLeftChild(index) || this.hasRightChild(index)) {
      let current = this.heap[index]
      const hasLeftChild = this.hasLeftChild(index)
      const hasRightChild = this.hasRightChild(index)
      if (hasLeftChild && hasRightChild) {
        const leftChildIndex = this.getLeftChildIndex(index)
        const leftChild = this.heap[leftChildIndex]
        const rightChildIndex = this.getRightChildIndex(index)
        const rightChild = this.heap[rightChildIndex]
        if (leftChild > current) {
          if (rightChild > leftChild) {
            this.swap(rightChildIndex, index)
            index = rightChildIndex
          } else {
            this.swap(leftChildIndex, index)
            index = leftChildIndex
          }
        } else if (rightChild > current) {
          this.swap(rightChildIndex, index)
          index = rightChildIndex
        } else {
          break
        }
      } else if (hasLeftChild) {
        const leftChildIndex = this.getLeftChildIndex(index)
        const leftChild = this.heap[leftChildIndex]
        if (leftChild > current) {
          this.swap(leftChildIndex, index)
          index = leftChildIndex
        } else {
          break
        }
      } else if (hasRightChild) {
        const rightChildIndex = this.getRightChildIndex(index)
        const rightChild = this.heap[rightChildIndex]
        if (rightChild > current) {
          this.swap(rightChildIndex, index)
          index = rightChildIndex
        } else {
          break
        }
      }
    }
    return max
  } 

  extractMin() {
    return this.heap[0]
  }
}

module.exports = MaxHeap

