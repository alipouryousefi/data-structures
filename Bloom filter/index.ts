class BloomFilter {
    private size: number; // The size of the bit array
    private bitArray: boolean[]; // Initialize the bit array with false
    private hashFunctions: ((element: string) => number)[]; // An array of hash functions to use
  
    constructor(size: number, hashFunctions: ((element: string) => number)[]) {
      this.size = size;
      this.bitArray = new Array(size).fill(false);
      this.hashFunctions = hashFunctions;
  
      // Check that hashFunctions is an array of functions
      if (!Array.isArray(hashFunctions) || hashFunctions.some(fn => typeof fn !== 'function')) {
        throw new Error('hashFunctions should be an array of functions');
      }
    }
  
    // Add an element to the Bloom filter
    add(element: string) {
      this.hashFunctions.forEach(fn => {
        const index = fn(element) % this.size;
        this.bitArray[index] = true;
      });
    }
  
    // Test if an element is probably in the Bloom filter
    contains(element: string): boolean {
      return this.hashFunctions.every(fn => {
        const index = fn(element) % this.size;
        return this.bitArray[index] === true;
      });
    }
  }
  
  // Example usage:
  const bloomFilter = new BloomFilter(10, [
    str => str.charCodeAt(0),
    str => str.length,
  ]);
  
  bloomFilter.add('apple');
  bloomFilter.add('orange');
  
  console.log(bloomFilter.contains('apple')); // Output: true
  console.log(bloomFilter.contains('banana')); // Output: false (probably not in the set)
  