class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    // Add a child node to the current node
    addChild(childNode) {
      this.children.push(childNode);
    }
  }
  
  // Example usage:
  const root = new TreeNode('A');
  const nodeB = new TreeNode('B');
  const nodeC = new TreeNode('C');
  const nodeD = new TreeNode('D');
  
  root.addChild(nodeB);
  root.addChild(nodeC);
  nodeB.addChild(nodeD);