class LinkedList {
  constructor(value) {
    this.next = new LinkedListNode(value, null);
  }

  prepend(value) {
    const prev = this.next;
    this.next = new LinkedListNode(value, prev);
  }
  
  append(value) {
    let end = this.next;
    while (end != null) {
      end = end.next;
    }
    end = new LinkedListNode(value, null);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.data = value ?? null;
    this.next = next  ?? null;
  }
}

let list = new LinkedList('test');
list.prepend('test1');

console.log(list);