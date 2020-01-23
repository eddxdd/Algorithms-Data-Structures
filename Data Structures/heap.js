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
}

let heap = new MaxBinaryHeap();
// [41,39,33,18,27,12,55]