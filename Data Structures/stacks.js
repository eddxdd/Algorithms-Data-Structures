// Stacks are a LIFO Data Structure (Last In, First Out)

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
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
    push(val) {

    }
}