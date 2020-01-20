// Queues are a FIFO Data Structure (First In, First Out)
// Used in: queue, background tasks, printing (order), etc
// * Not a built-in DS in JavaScript

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // enqueue() pseudocode: adds to end of queue
    // 1. This function accepts a value
    // 2. Create a new node using that value passed to the function
    // 3. If there are no nodes in the queue, set this node to be the first and last property of the queue
    // 4. Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
    // 5. Increment the size of the queue by 1 and return it
    enqueue(val) {  // 1.
        var newNode = new Node(val);    // 2.
        // 3.
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {    // 4.
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size; // 5.
    }
    // dequeue() pseudocode: remove from the beginning of queue
    // 1. If there is no first property, return null
    // 2. Store the first property in a variable
    // 3. See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to null
    // 4. If there is more than 1 node, set the first property to be the next property of first
    // 5. Decrement the size by 1
    // 6. Return the value of the node dequeued
    dequeue(val) {
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