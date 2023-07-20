interface Node {
  value: string | number;
}

interface Graph {
  nodes: Node[];
  adjacencyList: Record<string | number, Node[]>;
}

class GraphImpl implements Graph {
  nodes: Node[];
  adjacencyList: Record<string | number, Node[]>;

  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(value: string | number) {
    const newNode: Node = { value };
    this.nodes.push(newNode);
    this.adjacencyList[value] = [];
  }

  addEdge(node1: string | number, node2: string | number) {
    if (!this.adjacencyList[node1] || !this.adjacencyList[node2]) {
      throw new Error("Node does not exist in the graph.");
    }

    this.adjacencyList[node1].push(
      this.nodes.find((node) => node.value === node2)!
    );
    this.adjacencyList[node2].push(
      this.nodes.find((node) => node.value === node1)!
    );
  }
}

const graph = new GraphImpl();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

// {
//     1: [Node { value: 2 }],
//     2: [Node { value: 1 }, Node { value: 3 }],
//     3: [Node { value: 2 }]
// }