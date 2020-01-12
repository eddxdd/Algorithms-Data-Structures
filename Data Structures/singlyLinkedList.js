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
    // push pseudo-code: insert at end
    // This function should accept a value
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    // Increment the length by one
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
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {

        }
    }
}

// This is so we can add it to the end of the list
var list = new SinglyLinkedList();

console.log(list.push("HELLO"));
console.log(list.push("GOODBYE"));