class BloomFilter {
    constructor(size, hashFunctions) {
      this.size = size; // The size of the bit array
      this.bitArray = new Array(size).fill(false); // Initialize the bit array with false
      this.hashFunctions = hashFunctions; // An array of hash functions to use
  
      // Check that hashFunctions is an array of functions
      if (!Array.isArray(hashFunctions) || hashFunctions.some(fn => typeof fn !== 'function')) {
        throw new Error('hashFunctions should be an array of functions');
      }
    }
  
    // Add an element to the Bloom filter
    add(element) {
      this.hashFunctions.forEach(fn => {
        const index = fn(element) % this.size;
        this.bitArray[index] = true;
      });
    }
  
    // Test if an element is probably in the Bloom filter
    contains(element) {
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
  