// In a binary search tree, the node to the left <= current < right. It provides special properties.

const TreeNode = require('./binary-tree-node')

class BinaryTree {
  constructor(root) {
    this.root = root || null
  }
  
  delete(data, node = this.root) {
    if (node === null) {
      return null
    }

    if (node.data > data) {
      node.left = this.delete(data, node.left)
      return node
    } else if (node.data < data) {
      node.right = this.delete(data, node.right)
      return node
    }

    if (node.left === null) {
      let temp = node.right
      node = null
      return temp
    } else if (node.right === null) {
      let temp = node.left
      node = null
      return temp
    } else {
      const successor = this.findSuccessor(node.right)
      node.data = successor.data
      node.right = this.delete(node.data, node.right)
      return node
    }
  }

  find(data, node = this.root) {
    if (node === null) {
      return null
    } else if (node.data === data) {
      return node
    } else if (node.data > data) {
      return this.find(data, node.left)
    } else {
      return this.find(data, node.right)
    }
  }
  
  findSuccessor(node = this.root) {
    if (node.left === null) {
      return node
    } else if (node.left) {
      return this.findSuccessor(node.left)
    }
  }

  insert(data, node = this.root) {
    if (this.root === null) {
      this.root = new TreeNode(data)
    } else if (data <= node.data) {
      if (node.left === null) {
        node.left = new TreeNode(data)
      } else {
        this.insert(data, node.left)
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(data)
      } else {
        this.insert(data, node.right)
      }
    }
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

  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left)
      console.log(node.data)
      this.inOrder(node.right)
    }
  }
  
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.data)
      this.inOrder(node.left)
      this.inOrder(node.right) 
    }
  }

  postOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left)
      this.inOrder(node.right)
      console.log(node.data)
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
}

module.exports = BinaryTree