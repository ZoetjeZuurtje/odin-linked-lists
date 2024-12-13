class LinkedList {
  constructor (value) {
    this.head = new LinkedListNode(value, null)
    this.size = 1
  }

  tail () {
    return this.at(this.size - 1)
  }

  prepend (value) {
    const prev = this.head
    this.head = new LinkedListNode(value, prev)

    this.size += 1
  }

  append (value) {
    let node = this.head
    while (node.next != null) {
      node = node.next
    }
    node.next = new LinkedListNode(value, null)

    this.size += 1
  }

  insertBefore (value, index) {
    if (index === 0) {
      this.prepend(value)
      return
    }

    try {
      let node = this.head
      for (let i = 1; i < index; i++) {
        node = node.next
      }
      const oldNode = node.next.next
      node.next = new LinkedListNode(value, oldNode)
    } catch (error) {
      console.error('Error: Index out of bounds')
    }
  }

  view () {
    let string = 'head -> '
    let node = this.head
    while (node != null) {
      string += `${node.data} -> `
      node = node.next
    }
    string += 'null'

    return string
  }

  at (index) {
    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node.next
    }
    return node.data
  }
}

class LinkedListNode {
  constructor (value, next) {
    this.data = value ?? null
    this.next = next ?? null
  }
}

// const list = new LinkedList('test')
// list.prepend('test1')
// list.prepend('test2')
// list.append('test3')
// list.append('test4')

// console.log(list.view())
// console.log(list.size)
// console.log(list.tail())
