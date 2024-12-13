class LinkedList {
  constructor(value) {
    this.head = new LinkedListNode(value, null);
  }

  prepend(value) {
    const prev = this.head;
    this.head = new LinkedListNode(value, prev);
  }
  
  append(value) {
    let node = this.head;
    while (node.next != null) {
      node = node.next;
    }
    node.next = new LinkedListNode(value, null);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.data = value ?? null;
    this.next = next  ?? null;
  }
}

// let list = new LinkedList('test');
// // list.prepend('test1');
// // list.prepend('test2');
// list.append('test3');

// console.log(list.view());