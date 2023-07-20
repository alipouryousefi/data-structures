class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        this.adjacencyList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

// {
//     1: [2],
//     2: [1, 3],
//     3: [2]
// }