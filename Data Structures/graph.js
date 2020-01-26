

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // 1. Write a method called addVertex, which accepts a name of a vertex
    // 2. It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.this.adjacencyList[vertex] = [];
    }
}