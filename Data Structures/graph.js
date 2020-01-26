// Graph: A graph DS consists of a finite set of vertices/nodes/pointers, together with a set of unordered pairs of 
// these vertices for an undirected graph or a set of ordered pairs for a directed graph. (vertices+edges)
// Used in: Social networks, recommendation, mapping
// Adjacency List: Takes up less space in sparse graphs, faster to iterate over all edges, can be slower to look up specific edge
// Adjacency Matrix: Takes up more space in sparse graphs, slower to iterate over all edges, but faster to look up specific edge

// * This can be improved via error handling; making sure the vertex is valid, etc.
// Those are just the bare minimum examples.

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // 1. Write a method called addVertex, which accepts a name of a vertex
    // 2. It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    // 1. This function should accept two vertices, we can call them vertex1 and vertex2
    // 2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    // 3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    // * Undirected, unweighted
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    // 1. This function should accept two vertices, we'll call them vertex1 and vertex2
    // 2. The function should reassign the key of vertex1 to be an array that does not contain vertex2
    // 3. The function should reassign the key of vertex2 to be an array that does not contain vertex1
    removeEdge(v1,v2) {
        // Take the adjacencyList of v1, filter it, keep everything where its not equal to v2
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    // 1. The function should accept a vertex to remove
    // 2. The function loops as long as there are any other vertices in the adjacency list for that vertex
    // 3. Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
    // 4. Delete the key in the adjacency list for that vertex
    removeVertex(vertex) {
        // We'll be popping off values until our list reaches 0 and stops (could also just use a for loop)
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);    // 3.
        }
        delete this.adjacencyList[vertex];  // 4.
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

g.addEdge("Dallas", "Tokyo");

console.log(g.adjacencyList);