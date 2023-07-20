class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;
  
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    root: TrieNode;
  
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word: string): void {
      let currentNode: TrieNode = this.root;
      for (const char of word) {
        if (!currentNode.children[char]) {
          currentNode.children[char] = new TrieNode();
        }
        currentNode = currentNode.children[char];
      }
      currentNode.isEndOfWord = true;
    }
  
    search(word: string): boolean {
      let currentNode: TrieNode = this.root;
      for (const char of word) {
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix: string): boolean {
      let currentNode: TrieNode = this.root;
      for (const char of prefix) {
        if (!currentNode.children[char]) {
          return false;
        }
        currentNode = currentNode.children[char];
      }
      return true;
    }
  }
  
  // Example usage:
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("banana");
  
  console.log(trie.search("apple")); // Output: true
  console.log(trie.search("app")); // Output: true
  console.log(trie.search("ban")); // Output: false
  
  console.log(trie.startsWith("app")); // Output: true
  console.log(trie.startsWith("ban")); // Output: true
  console.log(trie.startsWith("orange")); // Output: false
  