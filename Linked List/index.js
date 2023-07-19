// Node class to represent individual nodes
class Node {
    constructor(data) {
      this.data = data;
      this.next = null; // Reference to the next node (initialized to null)
    }
  }
  
  // Linked list class to manage the list
  class LinkedList {
    constructor() {
      this.head = null; // Reference to the first node (initialized to null)
    }
  
    // Method to add a new node to the end of the linked list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        // If the list is empty, set the new node as the head
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        // Add the new node at the end
        current.next = newNode;
      }
    }
  
    // Method to print the linked list elements
    print() {
      let current = this.head;
      const elements = [];
      while (current) {
        elements.push(current.data);
        current = current.next;
      }
      console.log(elements.join(' -> '));
    }
  }
  
  // Usage
  const linkedList = new LinkedList();
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  linkedList.print(); // Output: 10 -> 20 -> 30
  