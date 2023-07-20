// Creating a hash table
const hashTable: { [key: string]: any } = {};

// Adding key-value pairs
hashTable["name"] = "John";
hashTable["age"] = 30;
hashTable["city"] = "New York";

// Accessing values using keys
console.log(hashTable["name"]); // Output: "John"
console.log(hashTable["age"]); // Output: 30

// Checking if a key exists
console.log("city" in hashTable); // Output: true
console.log("gender" in hashTable); // Output: false

// Deleting a key-value pair
delete hashTable["age"];
console.log(hashTable); // Output: { name: 'John', city: 'New York' }