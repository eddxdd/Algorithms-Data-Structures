// Heap: Similar to a BST, but left and right are filled ALWAYS before moving down, and left is always filled first
// Often used in: Priority Queue
// MaxBinaryHeap: Parent nodes are always bigger than child nodes
// MinBinaryHeap: Parent nodes are always smaller than child nodes
// If you insert() to a heap tree, the value will "bubble up" depending on Min/Max or stay in place. Siblings don't matter, only parent/child.
// Formula to find children: left side (2n+1) right side (2n+2)
// Formula to find parent: (n-1)/2

// 1. Push the value into the values property on the heap
// 2. Bubble Up: 
// 2a. Create a variable called index which is the length of the values property - 1
// 2b. Create a variable called parentIndex which is the floor of (index - 1) / 2
// 2c. Keep looping as long as the values element at the parentIndex is less than the values element at the child index
// 3. Swap the value of the values element at the parentIndex with the value of the element property at the child index
// 4. Set the index to be the parentIndex, and start over