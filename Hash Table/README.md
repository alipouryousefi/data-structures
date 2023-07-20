# Hash tables (Hash maps)

Hash tables, also known as hash maps or dictionaries, are data structures that store key-value pairs. They are efficient for retrieving and storing data, making them widely used in programming. In JavaScript, hash tables can be implemented using object.

In the example, we create a hash table using an empty object hashTable. We add key-value pairs using square bracket notation (hashTable["key"] = value). We can access the values using the keys, and we can check if a key exists using the in operator. To delete a key-value pair, we use the delete keyword.

Hash tables provide fast access to values based on their keys, and their time complexity for insertion, deletion, and retrieval is generally O(1) on average. However, keep in mind that the actual performance can be affected by hash collisions and other factors, so it's essential to understand the underlying implementation details when using hash tables in more complex scenarios.