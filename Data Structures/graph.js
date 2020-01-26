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
    /*
        //Recursion//
        DFS(vertex):
            if vertex is empty
                return (this is base case)
            add vertex to results list
            mark vertex as visited
            for each neighbor in vertex's neighbors:
                if neighbor is not visited:
                    recursively call DFS on neighbor

    */

    // 1. The function should accept a starting node
    // 2. Create a list to store the end result, to be returned at the very end
    // 3. Create an object to store visited vertices
    // 4. Create a helper function which accepts vertex
    // 4a. The helper function should return early if the vertex is empty
    // 4b. The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
    // 4c. Loop over all of the values in the adjacencyList for that vertex
    // 4d. If any of those values have not been visited, recursively invoke the helper function with that vertex
    // 5. Invoke the helper function with the starting vertex the first time through
    // 6. Return the result array
    depthFirstRecursive(start) {    // 1.
        const result = [];  // 2.
        const visited = {}; // 3.
        const adjacencyList = this.adjacencyList;   // * Because of JS scoping we're declaring this const here

        // 4.
        (function dfs(vertex) {
            if (!vertex) return null;   // 4a.
            // 4b.
            visited[vertex] = true;
            result.push(vertex);
            // 4c.
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {    // 4d.
                    return dfs(neighbor);
                }
            });
        })(start);   // 5.
        return result;  // 6.
    }
    /*
        //Iterative//
        DFS-iterative(start):
        let S be a stack
        S.push(start)
        while S is not empty
            vertex = S.pop()
            if vertex is not labeled as discovered:
                visit vertex (add to result list)
                label vertex as discovered
                for each of vertex's neighbors, N do S.push(N)
    */

    // 1. The function should accept a starting node
    // 2. Create a stack to help use keep track of vertices (use a list/array)
    // 3. Create a list to store the end result, to be returned at the very end
    // 4. Create an object to store visited vertices
    // 5. Add the starting vertex to the stack, and mark it visited
    // 6. While the stack has something in it:
    // 6a. Pop the next vertex from the stack
    // 7. If that vertex hasn't been visited yet:
    // 7a. Mark it as visited
    // 7b. Add it to the result list
    // 7c. Push all of its neighbors into the stack
    // 8. Return the result array
    depthFirstIterative(start) {    // 1.
        const stack = [start];   // 2.  5. (5. because we're also initializing it to start here)
        const result = [];  // 3.
        const visited = {}; // 4.
        let currentVertex;  // * Declare it here so we don't have to redefine it each time through the loop

        visited[start] = true;  // 5.
        // 6.
        while (stack.length) {
            console.log(stack);
            currentVertex = stack.pop();    // 6a.
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                // 7.
                if (!visited[neighbor]) {
                    visited[neighbor] = true;   // 7a.
                    stack.push(neighbor);   // 7c.
                }
            });
        }
        return result;  // 8.
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.depthFirstRecursive("A"));