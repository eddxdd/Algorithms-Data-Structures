// What is it? It's a data structure that contains a head, tail and length property.
// Linked Lists consists of nodes, and each node has a value and a pointer to another node or NULL.
// Good for insertion and deletion. But random access [] is not allowed. You must traverse every node.


// node: stores a piece of data (val) - and makes a reference to next node
// Initialize next = null; 
// Because in the beginning, there's nothing after it.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        // In the beginning
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Create a new node and assign it to the head of the list
    // push: insert at end
    // For the first time, both head and tail will be the same. After, it should add to current tail.
    push(val) {
        var newNode = new Node(val);
        // "If it's an empty list"
        // head/tail point to the same
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Else, take current tail, add to it, and move to the new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

// This is so we can add it to the end of the list
var list = new SinglyLinkedList();

console.log(list.push("HELLO"));
console.log(list.push("GOODBYE"));