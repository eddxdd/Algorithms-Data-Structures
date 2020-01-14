// What is it? It's a data structure that contains a head, tail and length property.
// Linked Lists consists of nodes, and each node has a value and a pointer to another node or NULL.
// Good for insertion and deletion. But random access [] is not allowed. You must traverse every node.
// (HEAD) -> (NODE) -> (NODE) ... -> (TAIL)


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
    // push() pseudocode: inserts a node at end of the list
    // 1. This function should accept a value
    // 2. Create a new node using the value passed to the function
    // 3. If there is no head property on the list, set the head and tail to be the newly created node
    // 4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    // 5. Increment the length by one
    // 6. Return the linked list
    push(val) { // 1.
        var newNode = new Node(val);    // 2.
        // "If it's an empty list"
        // 3. head/tail point to the same
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // 4. Else, take current tail, add to it, and move to the new node
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;  // 5.
        return this;    // 6.
    }
    // pop() pseudocode: removes a node at end of the list
    // 1. If there are no nodes in the list, return undefined
    // 2. Loop through the list until you reach the tail
    // 3. Set the tail to be the 2nd to last node
    // 4. Set the next property of the 2nd to last node to be null (so it no longer points at next)
    // 5. Decrement the length of the list by 1
    // 6. Return the value of the node removed
    pop() {
        if(!this.head) return undefined;    // 1.
        // Here we keep 2 variables, current tracks ahead and newTail lags 1 behind (in the beginning they're the same)
        // So that current can reach the end first and pop()
        // And newTail can become the new tail
        var current = this.head;
        var newTail = current;
        while (current.next) {  // 2. While there is a next
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;    // 3.
        this.tail.next = null; // 4.
        this.length--;  // 5.
        // If there was one last item, and we pop()
        // Reset the head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current; // 6.
    }
    // shift() pseudocode: removes a node at the beginning of the list
    // Always constant time when compared to array
    // 1. If there are no nodes, return undefined
    // 2. Store the current head property in a variable
    // 3. Set the head property to be the current head's next property
    // 4. Decrement the length by 1
    // 5. Return the value of the node removed
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;    // 2.
        this.head = currentHead.next;   // 3.
        this.length--;  // 4.
        return currentHead; // 5.
    }
    // unshift() pseudocode: adds a node at the beginning of the list
    // 1. This function should accept a value
    // 2. Create a new node using the value passed to the function
    // 3. If there is no head property on the list, set the head and tail to be the newly created node
    // 4. Otherwise set the newly created node's next property to be the current head property on the list
    // 5. Set the head property on the list to be that newly created node
    // 6. Increment the length of the list by 1
    // 7. Return the linked list
    unshift(val) {  // 1.
        var newNode = new Node(val);    // 2.
        if (!this.head) {    // 3.
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;   // 4.
            this.head = newNode;    // 5.
        }
        this.length++;  // 6.
        return this;    // 7.
    }
    // get() pseudocode: retrieve a node by it's position in the Linked List
    // 1. This function should accept an index
    // 2. If the index is < 0 or >= length of the list, return null
    // 3. Loop through the list until you reach the index and return the node at that specific index
    get(index) {    // 1.
        if (index < 0 || index >= this.length) return null; // 2.
        var counter = 0;
        var current = this.head;
        // Imagine you want to get index at 3
        // current moves up each time through, while it adds +1 to counter
        // When counter === 3, we're finished.
        while (counter !== index) { // 3.
            current = current.next;
            counter++;
        }
        return current;
    }
    // set() pseudocode: change the value of a node based on it's position in the Linked List
    // 1. This function should accept a value and an index
    // 2. Use the get() function to find the specific node
    // 3. If the node is found, set the value of that node to be the value passed to the function and return true
    // 4. If the node is not found, return false
    set(index, val) {   // 1.
        var foundNode = this.get(index);    // 2.
        if (foundNode) {    // 3.
            foundNode.val = val;
            return true;
        }
        return false;   // 4.
    }
    // insert() pseudocode: adding a node to the linked list at a specific position
    // 1. If the index is less than zero or greater than the length, return false
    // 2. If the index is the same as the length, push a new node to the end of the list
    // 3. If the index is 0, unshift a new node to the start of the list
    // 4. Otherwise, use the get() method to access the node at the index - 1
    // 5. Set the next property on that node to be the new node
    // 6. Set the next property on the new node to be the previous next
    // 7. Increment the length
    // 8. Return true
    insert(index, val) {
        if (index < 0 || index > this.length) return false; // 1.
        if (index === this.length) return !!this.push(val);   // 2. (Best just use push and unshift if you want to insert at end/beginning)
        if (index === 0) return !!this.unshift(val);  // 3. 
        
        var newNode = new Node(val);    // 5.
        var prev = this.get(index - 1); // 4.
        // 6.
        var temp = prev.next;   
        prev.next = newNode;
        newNode.next = temp;
        this.length++;  // 7.
        return true;
    }
}

// This is so we can add it to the end of the list
var list = new SinglyLinkedList();

list.push("HELLO");
list.push("TO");
list.push("YOU");
list.push("AND");
list.push("GOODBYE");
list.push("!!");
console.log(list.get(3));