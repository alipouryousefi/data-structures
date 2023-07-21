
// Creating an empty Set
const mySet = new Set();

// Creating a Set with elements
const fruits = new Set(['apple', 'banana', 'orange']);


// Adding Elements
mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // Won't be added, as it's already in the Set


//Checking Existence
console.log(fruits.has('apple')); // Output: true
console.log(fruits.has('grape')); // Output: false


//Removing Elements

fruits.delete('banana');
console.log(fruits); // Output: Set { 'apple', 'orange' }

//Set Size
console.log(mySet.size); // Output: 2

//Iterating through a Set

for (const item of fruits) {
    console.log(item);
}
  // Output:
  // apple
  // banana
  // orange
