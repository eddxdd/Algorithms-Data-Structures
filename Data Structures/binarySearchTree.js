// Tree: A data structure that consists of nodes in a parent/child relationship
// Tree: Can have as many nodes as possible
// Binary Tree/Binary Search Tree (BST): Max 2 nodes per node
// BST: Sorted (any node that is less than the parent is to the left, any node that is higher is to the right)

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert() pseudocode
    // 1. Create a new node
    // 2. Starting at the root ->
    // 2a. Check if there is a root, if not - the root now becomes that new node
    // 2b. If there is a root, check if the value of the new node is greater or less than the value of the root
    // 3. If it's greater
    // 3a. Check to see if there is a node to the right
    // If there is, move to that node and repeat these steps
    // If there is not, add that node as the right property
    // 4. If it's less
    // 4a. Check to see if there is a node to the left
    // If there is, move to that node and repeat these steps
    // If there is not, add that node as the left property
    insert(value) {
        
    }
}