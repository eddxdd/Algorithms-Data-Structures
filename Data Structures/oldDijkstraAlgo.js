// * This algo can be improved if implemented with a binary heap.
// * Because right now we're sorting the entire array every single time.
// * See new dijkstraAlgo.js file for binary heap version.

class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2,weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight: weight});
    }
    // 1. This function should accept a starting and ending vertex
    // 2. Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
    // 3. After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
    // 4. Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    // 5. Start looping as long as there is anything in the priority queue
    // 5a. dequeue() a vertex from the priority queue
    // 5b. If that vertex is the same as the ending vertex - we are done
    // 5c. Otherwise loop through each value in the adjacency list at that vertex
    // 6. Calculate the distance to that vertex from the starting vertex
    // 6a. If the distance is less than what is currently stored in our distances object:
    // 7. Update the distances object with new lower distance
    // 7a. Update the previous object to contain that vertex
    // 7b. enqueue() the vertex with the total distance from the start node
    Dijkstra(start, finish){    // 1.
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        // 2.
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                // 3.
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                // 3.
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;    // 4.
        }
        // as long as there is something to visit
        // 5.
        while(nodes.values.length){
            smallest = nodes.dequeue().val; // 5a.
            if(smallest === finish){    // 5b.
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                // At the beginning it starts at "E", then previous is "F"
                // Then we put "F" in, grab the previous... until null.
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                // 5c.
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    // 6.
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    // 6a.
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;    // 7.
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;  // 7a.
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate); // 7b.
                    }
                }
            }
        }
        // Here we use concat() to include "A" and reverse() to put the list in order
        return path.concat(smallest).reverse();     
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.Dijkstra("A", "E"));

// ["A", "C", "D", "F", "E"]