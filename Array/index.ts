// Creating an Array:
// You can create an array by enclosing a comma-separated list of elements within square brackets [].

const numbersArray: number[] = [10, 20, 30];
const fruitsArray: string[] = ['apple', 'orange', 'banana'];
const mixedArray: (number | string | boolean | null)[] = [1, 'hello', true, null];

// Accessing Elements:
// You can access elements in an array using their index, where the index starts from 0.

const numbers: number[] = [10, 20, 30];
console.log(numbers[0]); // Output: 10
console.log(numbers[2]); // Output: 30

// Modifying Elements:
// You can modify elements in an array by assigning new values to specific indices.

const fruits: string[] = ['apple', 'orange', 'banana'];
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'banana']

// Array Length:
// The length property returns the number of elements in an array.
const number: number[] = [1, 2, 3, 4, 5];
console.log(number.length); // Output: 5

// TypeScript provides type annotations for arrays, ensuring that you work with the correct data types.

// JavaScript provides many built-in methods to manipulate arrays easily. Some common methods include:

// push(): Adds one or more elements to the end of the array.
// pop(): Removes the last element from the array.
// unshift(): Adds one or more elements to the beginning of the array.
// shift(): Removes the first element from the array.
// splice(): Adds or removes elements from the array at a specified index.
// concat(): Concatenates two or more arrays.
// slice(): Extracts a portion of the array into a new array.

const colors: string[] = ['red', 'green', 'blue'];

// Add an element to the end of the array
colors.push('yellow');
console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']

// Remove the last element from the array
colors.pop();
console.log(colors); // Output: ['red', 'green', 'blue']

// Add an element to the beginning of the array
colors.unshift('orange');
console.log(colors); // Output: ['orange', 'red', 'green', 'blue']

// Remove the first element from the array
colors.shift();
console.log(colors); // Output: ['red', 'green', 'blue']

// Extract a portion of the array into a new array
const newColors: string[] = colors.slice(1, 3);
console.log(newColors); // Output: ['green', 'blue']
