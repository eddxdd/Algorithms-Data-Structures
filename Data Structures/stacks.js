// Stacks are a LIFO Data Structure (Last In, First Out)

class Node {
    constructor() {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // push() pseudocode: add a node from the *beginning* of stack
    // * we will be adding and removing from the beginning because from the end is not constant time.
    // 1. The function should accept a value
    // 2. Create a new node with that value
    // 3. If there are no nodes in the stack, set the first and last property to be the newly created node
    // 4. If there is at least one node, create a variable that stores the current first property on the stack
    // 5. Reset the first property to be the newly created node
    // 6. Set the next property on the node to be the previously created variable
    // 7. Increment the size of the stack by 1
    push(val) { // 1.
        var newNode = new Node(val);    // 2.
        // 3.
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {    // 4.
            // 5.
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp; // 6.
        }
        return ++this.size; // 7.
    }
    // pop() pseudocode: remove a node from the *beginning* of stack
    // 1. If there are no nodes in the stack, return null
    // 2. Create a temporary variable to store the first property on the stack
    // 3. If there is only 1 node, set the first and last property to be null
    // 4. If there is more than one node, set the first property to be the next property on the current first
    // 5. Decrement the size by 1
    // 6. Return the value of the node removed
    pop() {
        if (!this.first) return null;   // 1.
        var temp = this.first;  // 2.
        // 3.
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;   // 4.
        this.size--;    // 5.
        return temp.value;  // 6.
    }
}