// Graph: A graph DS consists of a finite set of vertices/nodes/pointers, together with a set of unordered pairs of 
// these vertices for an undirected graph or a set of ordered pairs for a directed graph. (vertices+edges)
// Used in: Social networks, recommendation, mapping
// Adjacency List: Takes up less space in sparse graphs, faster to iterate over all edges, can be slower to look up specific edge
// Adjacency Matrix: Takes up more space in sparse graphs, slower to iterate over all edges, but faster to look up specific edge

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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

g.addEdge("Dallas", "Tokyo");

console.log(g.adjacencyList);