const ALPHABET_LENGTH = 26

class TrieNode {
  constructor() {
    this.endOfWord = false
    this.children = new Array(ALPHABET_LENGTH)
    this.children.fill(null)
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  add(word) {
    let ptr = this.root
    const uppercase = word.toUpperCase()
    for (let i = 0; i < uppercase.length; i++) {
      const index = uppercase.charCodeAt(i) - 65
      if (ptr.children[index] === null) {
        ptr.children[index] = new TrieNode()
      }
      ptr = ptr.children[index]
    }
    ptr.endOfWord = true
  }

  search(word) {
    let ptr = this.root
    const uppercase = word.toUpperCase()

    for (let i = 0; i < uppercase.length; i++) {
      const index = uppercase.charCodeAt(i) - 65
      if (ptr.children[index] === null) {
        return false
      }
      ptr = ptr.children[index]
    }

    return ptr.endOfWord
  }
}

module.exports = Trie