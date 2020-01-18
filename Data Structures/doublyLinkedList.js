// DoublyLinkedLists are almost identical to SLL, except every node has another pointer to the previous node.
// (HEAD) <-> (NODE) <-> (NODE) ... <-> (TAIL)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}