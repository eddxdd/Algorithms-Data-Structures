// "push" insert at the end
// If there are no nodes in the list, return undefined
// Loop through the list until you reach the tail
// Set the next property of the 2nd to last node to be null
// Set the tail to be the 2nd to last node
// Decrement the length of the list by 1
// Return the value of the node removed

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        // If there's no head property on the list, set the head and tail to be the newly created node
        // "If it's an empty list" point it to newNode
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            // Otherwise, take the next property of the current tail and set it to newNode
            // ex: HELLO GOODBYE
            this.tail.next = newNode;
            // Then update this.tail to newNode (now the new tail)
            this.tail = newNode;
        }
        // Increment length by one
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        // do this while there's a next current
        while(current.next) {
            newTail = current; // newTail is always one behind current
            current = current.next; // move current one after newTail
        }
        this.tail = newTail;
        this.tail.next = null; // This is to sever the connection to current.next
        this.length--;
        return current;
    }
}

var list = new SinglyLinkedList()
// list.push("1")
// list.push("2")
// list.push("3)
// list.push("4")