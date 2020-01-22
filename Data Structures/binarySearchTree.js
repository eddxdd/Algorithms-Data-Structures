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
    // 3. If it's less
    // 3a. Check to see if there is a node to the left
    // 3b. If there is not, add that node as the left property
    // 3c. If there is, move to that node and repeat these steps
    // 4. If it's greater
    // 4a. Check to see if there is a node to the right
    // 4b. If there is not, add that node as the right property
    // 4c. If there is, move to that node and repeat these steps
    insert(value) {
        var newNode = new Node(value);  // 1.
        // 2a.
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {  // Now we loop until we find whether a node is less or greater
                if (value === current.value) return undefined;  // Edge case if we insert double (causes infinite loop otherwise)
                if (value < current.value) {    // 3
                    if (current.left === null) {    // 3a.
                        // 3b.
                        current.left = newNode;
                        return this;
                    } else {    // 3c.
                        current = current.left;
                    }
                } else if (value > current.value) { // 4.
                    if (current.right === null) {   // 4a.
                        // 4b.
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;    // 4c.
                    }
                }
            }
        }
    }
    // search() pseudocode
    // Starting at the root
    // 1. Check if there is a root, if not, we're done searching
    // 2. If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done.
    // 3. If not, check to see if the value is greater than or less than the value of the root
    // 4. If its less
    // 4a. Check to see if there is a node to the left
    // 4b. If there is, move to that node and repeat these steps
    // If there is not, we're done searching
    // 5. If its greater
    // 5a. Check to see if there is a node to the right
    // 5b. If there is, move to that node and repeat these steps
    // If there is not, we're done searching
    search(value) {
        if (this.root === null) return false;
        var current = this.root;
        var found = false;
        while (current && !found) {
            if (value < current.value ) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    // BFS() pseudocode: visit every single node, from root, moving across the tree ->
    // 1. Create a queue (this can be an array) and a variable to store the values of nodes visited
    // 2. Place the root node in the queue
    // 3. Loop as long as there is something in the queue
    // 4. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    // 5. If there is a left property on the node dequeued - add it to the queue
    // 6. If there is a right property on the node dequeued - add it to the queue
    // 7. Return the variable that stores the values
    BFS() {
        // 1.
        var node = this.root;
        var data = [];
        var queue = [];
        queue.push(node);  // 2.
        while (queue.length) { // 3. we do queue.length because ![] is false. But ![].length is true
            // 4.
            node = queue.shift();
            data.push(node);    // use (node.value) for better readability on console, if you want.
            if (node.left) queue.push(node.left);   // 5.
            if (node.right) queue.push(node.right); // 6.
        }
        return data;    // 7.
    }
    // DFS() - PreOrder pseudocode: traverse left side first, then right side
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.BFS());