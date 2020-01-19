// DoublyLinkedLists are almost identical to SLL, except every node has ANOTHER pointer to the PREVIOUS node.
// (HEAD) <-> (NODE) <-> (NODE) ... <-> (TAIL)
// Consumes more memory in exchange of flexibility

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
    // push() pseudocode: add a node to the end of DLL
    // 1. Create a new node with the value passed to the function
    // 2. If the head property is null set the head and tail to be the newly created node
    // 3. If not, set the next property on the tail to be that node
    // 4. Set the previous property on the newly created node to be the tail
    // 5. Set the tail to be the newly created node
    // 6. Increment the length
    // 7. Return the DLL
    push(val) {
        var newNode = new Node(val); // 1.
        // 2.
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {    // 3.
            this.tail.next = newNode;
            newNode.prev = this.tail;   // 4.
            this.tail = newNode;    // 5.
        }
        this.length++;  // 6.
        return this;    // 7.
    }
    // pop() pseudocode: remove a node from the end of DLL
    // 1. If there is no head, return undefined
    // 2. Store the current tail in a variable to return later
    // 3. If the length is 1, set the head and tail to be null
    // 4. Update the tail to be the previous node
    // 5. Set the newTail next to null
    // 6. Decrement the length
    // 7. Return the value removed
    pop() {
        if (!this.head) return undefined;    // 1.
        var poppedNode = this.tail; // 2.
        // 3.
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;    // 4.
            this.tail.next = null;  // 5.
            poppedNode.prev = null;
        }
        this.length--;  // 6.
        return poppedNode;  // 7.
    }
    // shift() pseudocode: remove from the beginning
    // 1. If the length is 0, return undefined
    // 2. Store the current head property in a variable 
    // 3. If the length is one, set the head and tail to be null
    // 4. Update the head to be the next of the old head
    // 5. Set the head's prev proerty to null
    // 6. Decrement the length
    // 7. Return old head
    shift() {
        if (this.length === 0) return undefined;    // 1.
        var oldHead = this.head;    // 2.
        // 3.
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;   // 4.
            this.head.prev = null;  // 5.
            oldHead.next = null;
        }
        this.length--;  // 6.
        return oldHead; // 7.
    }
    // unshift() pseudocode: add to the beginning
    // 1. Create a new node with the value passed to the function
    // 2. If the length is 0, set the head/tail to be the new node
    // 3. Otherwise, set the prev property on the head of the list to be the new node
    // Set the next property on the new node to be the head property
    // Update the head to be the new node
    // 4. Increment the length
    // 5. Return the list
    unshift(val) {
        var newNode = new Node(val);    // 1.
        // 2.
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {    // 3.
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;  // 4.
        return this;    // 5.
    }
    // get() pseudocode: access a node by its position
    // 1. If the index is less than 0 or greater or equal to the length, return null
    // 2. If the index is less than or equal to half the length of the list
    // Loop through the list starting from the head and loop towards the middle
    // Return the node once its found
    // 3. If the index is greater than half the length of the list
    // Loop through the list starting from the tail and loop towards the middle
    // Return the node once its found
    get() {
        
    }
}

var list = new DoublyLinkedList();

list.push("5");
list.push("10");
list.push("25");
list.push("50");
list.push("75");
list.push("100");
console.log(list.pop());