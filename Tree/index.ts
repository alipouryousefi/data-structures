class TreeNode<T> {
    value: T;
    children: TreeNode<T>[];
  
    constructor(value: T) {
      this.value = value;
      this.children = [];
    }
  
    // Add a child node to the current node
    addChild(childNode: TreeNode<T>) {
      this.children.push(childNode);
    }
  }
  
  // Example usage:
  const root = new TreeNode<string>('A');
  const nodeB = new TreeNode<string>('B');
  const nodeC = new TreeNode<string>('C');
  const nodeD = new TreeNode<string>('D');
  
  root.addChild(nodeB);
  root.addChild(nodeC);
  nodeB.addChild(nodeD);
  