// In a binary tree each node has two children.

// This just randomly chooses the left or right node to add a new one.

const randomLeftOrRight = (left, right) => {
  return Math.ceil(Math.random() * 2) === 1 ? left : right
}

class TreeNode {
  constructor(data) {
    this.left = null
    this.right = null
    this.data = data || null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }
  
  delete(data) {
    const node = this.find(data)
    node = null
    return node
  }

  find(data, node = this.root) {
    if (node == null) {
      return null
    } else if (node.data === data) {
      return node
    } else {
      if (node.left) {
        this.find(data, node.left)
      }
      if (node.right) {
        this.find(data, node.right)
      }
    }
  }
  
  insert(data, node = this.root) {
    if (this.root === null) {
      this.root = new TreeNode(data)
    } else if (node.left === null) {
      node.left = new TreeNode(data)
    } else if (node.right === null) {
      node.right = new TreeNode(data)
    } else {
      this.insert(data, node.left)
    }
  }

  toString() {
    return this.getTreeStr()
  }

  getTreeStr(node = this.root, prefix = '', isLeft = false) {
    if (node === null) {
        return ''
    }

    let str = ''

    if (node.right !== null) {
        str += this.getTreeStr(node.right, prefix + (isLeft ? '│   ' : '    '), false)
    }

    str += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\n'

    if (node.left !== null) {
        str += this.getTreeStr(node.left, prefix + (isLeft ? '    ' : '│   '), true)
    }

    return str
  }

  print(node = this.root, level = 0, prefix = 'R: ') {
    if (node !== null) {
      console.log(' '.repeat(level * 4) + prefix + node.data);
      if (node.left !== null) {
        this.print(node.left, level + 1, 'L: ');
      }
      if (node.right !== null) {
        this.print(node.right, level + 1, 'R: ');
      }
    }
  } 
}

module.exports = BinaryTree

