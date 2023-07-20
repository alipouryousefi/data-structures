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
  
    // Insert a value into the BST
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      let current = this.root;
      while (true) {
        if (value === current.value) {
          // Value already exists in the BST
          return undefined;
        }
  
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    // Search for a value in the BST
    search(value) {
      let current = this.root;
      while (current) {
        if (value === current.value) {
          return current;
        } else if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return null;
    }
  
    // Perform In-order traversal on the BST
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
      }
      return result;
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(8);
  
  console.log(bst.search(8)); // Output: Node { value: 8, left: Node { value: 3, ... }, right: null }
  console.log(bst.inOrderTraversal()); // Output: [3, 5, 8, 10, 15]