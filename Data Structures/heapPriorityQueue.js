// Heap: Similar to a BST, but left and right are filled ALWAYS before moving down, and left is always filled first
// Often used in: Priority Queue
// MaxBinaryHeap: Parent nodes are always bigger than child nodes
// MinBinaryHeap: Parent nodes are always smaller than child nodes
// If you insert() to a heap tree, the value will "bubble up" depending on Min/Max or stay in place. Siblings don't matter, only parent/child.
// Formula to find children: left side (2n+1) right side (2n+2)
// Formula to find parent: (n-1)/2

// 1. Write a min binary heap - lower number means higher priority.
// 2. Each node has a val and a priority. Use the priority to build the heap.
// 3. Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
// 4. Dequeue method removes root element, returns it, and rearranges heap using priority.
// * This code does not account for sibling priority. But a good strategy to go about that is to consider the time that a sibling was put into the queue.
class PriorityQueue {
    constructor() {
        this.values = []; // *
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);  // *
        this.values.push(newNode);  // *
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);  // *
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break; // * also change <= or >= if you want a min or max queue
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {    // *
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) ||    // *
                    (swap !== null && rightChild.priority > leftChild.priority) // *
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 4);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 3);
ER.enqueue("broken arm", 2);
ER.enqueue("sore throat", 5);

console.log(ER);
console.log(ER.dequeue());