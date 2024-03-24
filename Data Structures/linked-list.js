const Node = require('./node')

class LinkedList {
  static addNode(list, node) {
    let current = list
    while (current.next !== null) {
      current = current.next
    }
    current.next = node
    return list
  }

  static checkCycle(list) {
    const set = new Set()

    let ptr = list
  
    while (ptr) {
      if (set.has(ptr)) {
        return true
      } else {
        set.add(ptr)
        ptr = ptr.next
      }
    }
  
    return false
  }

  static length(list) {
    let count = 0
    let node = list
    while(node.next !== null) {
      count++
      node = node.next
    }
    return count
  }

  static find(list, data) {
    let node = list
    while(node) {
      if (node.data === data) {
        return node
      }
      node = node.next
    }
    return null
  }

  static removeNode = (list, data) => {
    let node = list

    if (node.data === data) {
      return node.next
    }

    while (node.next !== null) {
      if (node && node.next.data === data) {
        node.next = node.next.next
      } else {
        node = node.next
      }
    }

    return list
  }

  static createList(data) {
    if (data.length === 0) return new Node(null)
    const head = new Node(data[0])
    let node = head
    for(let i = 1; i < data.length; i++) {
      node.next = new Node(data[i])
      node = node.next
    }
    return head
  }

  static createIntersection(arr1, arr2, val1, val2) {
    const list1 = this.createList(arr1)
    const list2 = this.createList(arr2)
    const middleNode = this.find(list1, val1)
    const lastNode = this.find(list2, val2)
    lastNode.next = middleNode
    return [list1, list2]
  }

  static createCycle(arr, cycle) {
    const list = this.createList(arr)
    const node = this.find(list, cycle)
    let ptr = list
    while(ptr.next) {
      ptr = ptr.next
    }
    ptr.next = node
    return list
  }

  static printList(list) {
    let set = new Set()
    let printed = ''
    let node = list

    while (node !== null) {
      printed += `${node.data}${node.next !== null ? ' -> ' : ''}`

      // Break if cycle detected

      if (set.has(node)) {
        break
      } else {
        set.add(node)
      }   

      node = node.next
    }

    return printed
  }

  static toArray(list) {
    let set = new Set()
    let array = []
    let node = list
    while (node !== null) {

      array.push(node.data)

      // Break if cycle detected

      if (set.has(node)) {
        break
      } else {
        set.add(node)
      }   

      node = node.next
    }
    return array
  }

  static clone(list) {
    return this.createList(this.toArray(list))
  }
}

module.exports = LinkedList