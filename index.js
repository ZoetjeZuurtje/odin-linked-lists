class LinkedList {
  constructor (...values) {
    this.head = null
    this.size = values.length !== 0 ? 1 : 0;

    values.forEach((value, index) => {
      if (index === 0) {
        this.head = new LinkedListNode(value, null)
      } else {
        this.append(value);
      }
    })
    
  }

  tail () {
    return this.at(this.size - 1)
  }

  prepend (value) {
    const prev = this.head
    this.head = new LinkedListNode(value, prev)

    this.size++
  }

  append (value) {
    let node = this.head
    while (node.next != null) {
      node = node.next
    }
    node.next = new LinkedListNode(value, null)

    this.size++
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
      const oldNode = node.next
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

  find (value) {
    let node = this.head
    let counter = 0
    while (node.data !== value) {
      if (node.next === null) return null // Reached end of the list

      counter++
      node = node.next
    }

    return counter
  }

  at (index) {
    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node.next
    }
    return node.data
  }

  pop () {
    if (this.size === 1) {
      this.head = null
    }

    let node = this.head
    for (let i = 0; i < this.size - 2; i++) {
      node = node.next
    }

    const returnValue = node.next.data
    node.next = null

    this.size--

    return returnValue
  }

  contains (value) {
    return this.find(value) !== null
  }
  
  removeAt (index) {
    let node = this.head
    for (let i = 0; i < index - 1; i++) {
      node = node.next
    }

    node.next = node.next.next;
  }
}

class LinkedListNode {
  constructor (value, next) {
    this.data = value ?? null
    this.next = next ?? null
  }
}

let linkedList = new LinkedList('dog', 'cat', 'fish');
linkedList.append(74)
linkedList.insertBefore('twee', 2)
console.log(linkedList.view())