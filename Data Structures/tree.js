// A tree is just a node with children. Nothing more and nothing less.

class TreeNode {
  constructor(children) {
    this.children = children || []
  }
}

class Tree {
  constructor() {
    this.root = new TreeNode()
  }
}

module.exports = Tree
