// Heap: Similar to a BST, but left and right are filled ALWAYS before moving down, and left is always filled first
// Often used in: Priority Queue
// MaxBinaryHeap: Parent nodes are always bigger than child nodes
// MinBinaryHeap: Parent nodes are always smaller than child nodes
// If you insert() to a heap tree, the value will "bubble up" depending on Min/Max or stay in place. Siblings don't matter, only parent/child.
// Formula to find children: left side (2n+1) right side (2n+2)
// Formula to find parent: (n-1)/2

class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12,55]; // Simply initializing the array already
    }
    // 1. Push the value into the values property on the heap
    // 2. Bubble Up: 
    // 2a. Create a variable called index which is the length of the values property - 1
    // 2b. Create a variable called parentIndex which is the floor of (index - 1) / 2
    // 2c. Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    // written as element <= parent because we want to break out of the loop if element is less (otherwise there's an infinite loop)
    // 3. Swap the value of the values element at the parentIndex with the value of the element property at the child index
    // 4. Update the index to be the parentIndex, and start over (otherwise you're stuck looping the same indexes over and over)
    insert(element) {
        this.values.push(element);  // 1.
        this.bubbleUp();    // 2.
    }
    bubbleUp() {
        let idx = this.values.length - 1;   // 2a.
        const element = this.values[idx];
        // Loop while idx > 0 so we can break out when we reach the 0th of array (else it goes into -1...)
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);  // 2b.
            let parent = this.values[parentIdx];
            if (element <= parent) break; // 2c.
            this.values[parentIdx] = element;   // 3.
            this.values[idx] = parent;
            // 4.
            idx = parentIdx;
        }
    }
    // extractMax() pseudocode:
    // 1. Swap the first value in the values property with the last one
    // 2. pop() from the values property, so you can return the value at the end
    // 3. Have the new root "sink down" to the correct spot
    // 4. Your parent index starts at 0 (the root)
    // 4a. Check if it's not out of bounds
    // 5. Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    // 6. Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
    // 7. If the left or right child is greater than the element, swap. 
    // 7a. If both left and right children are larger, swap the largest child.
    // 8. The child index you swapped to now becomes the new parent index
    // 9. Keep looping and swapping until neither child is larger than the element
    // 10. Return the old root
    extractMax() {
        // 1.
        const max = this.values[0]; // Store the value of max
        const end = this.values.pop();  // 2.
        if (this.values.length > 0) {   // *Edge case: only run the code if there's something in the array
            this.values[0] = end;
            this.sinkDown();    // 3.
        }
        return max; // 10.
    }
    sinkDown() {
        let idx = 0;    // 4.
        const length = this.values.length;
        const element = this.values[0];
        while (true) {  // 9.
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if (leftChildIdx < length) {    // 4a.
                leftChild = this.values[leftChildIdx];  // 5.
                // 7.
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {    // 4a.
                rightChild = this.values[rightChildIdx];  // 6.
                // 7.
                // 7a.
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;   // 8.
        }
    }
    //
    // 1. Write a min binary heap - lower number means higher priority.
    // 2. Each node has a val and a priority. Use the priority to build the heap.
    // 3. Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
    // 4. Dequeue method removes root element, returns it, and rearranges heap using priority.
}

let heap = new MaxBinaryHeap();

console.log(heap.extractMax());
// [41,39,33,18,27,12,55]